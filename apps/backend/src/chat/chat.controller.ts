import { Body, Controller, Post } from '@nestjs/common';
import { Chat } from '@prisma/client';
import { ChatService } from './chat.service';
import { AddMessageDto } from './dto/add-message.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  async addMessage(@Body() addMessageDto: AddMessageDto): Promise<Chat> {
    return await this.chatService.addMessage(addMessageDto);
  }
}
