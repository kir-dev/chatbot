import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { Chat, SentBy } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { AddMessageDto } from './dto/add-message.dto';
import { CreateChatDto } from './dto/create-chat.dto';

@Injectable()
export class ChatService {
  constructor(private readonly prisma: PrismaService) {}

  async createChat(createChatDto: CreateChatDto): Promise<Chat> {
    return await this.prisma.chat.create({ data: { userId: createChatDto.userId } });
  }

  async addMessage(addMessageDto: AddMessageDto): Promise<Chat> {
    if (!addMessageDto.chatId) {
      this.createChat({ userId: addMessageDto.userId });
    }
    const chat = await this.prisma.chat.findUnique({
      where: { id: addMessageDto.chatId },
      include: { messages: true },
    });

    if (!chat) {
      throw new NotFoundException('Chat not found');
    }
    if (chat.userId != addMessageDto.userId) {
      throw new ForbiddenException('Chat belongs to a different user');
    }

    const lastMessage = chat.messages.length == 0 ? undefined : chat.messages[chat.messages.length - 1];
    const userMessage = {
      message: addMessageDto.message,
      sentBy: SentBy.USER,
      index: (lastMessage?.index ?? 0) + 1,
    };
    //TODO
    const botMessage = {
      message: 'MOCK_ANSWER',
      sentBy: SentBy.BOT,
      index: (lastMessage?.index ?? 0) + 2,
    };

    return await this.prisma.chat.update({
      where: { id: addMessageDto.chatId },
      data: { messages: { createMany: { data: [userMessage, botMessage] } } },
    });
  }
}
