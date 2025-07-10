import { Injectable, NotFoundException } from '@nestjs/common';
import { SentBy } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { AddMessageDto } from './dto/add-message.dto';

@Injectable()
export class ChatService {
  constructor(private readonly prisma: PrismaService) {}

  async addMessage(addMessageDto: AddMessageDto) {
    var chat = await this.prisma.chat.findUnique({
      where: { id: addMessageDto.chatId },
      include: { messages: true },
    });
    if (!chat) {
      throw new NotFoundException('Chat not found');
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
