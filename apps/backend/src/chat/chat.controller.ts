import { Body, Controller, Post } from '@nestjs/common';
import { ChatService } from './chat.service';
import { AddMessageDto } from './dto/add-message.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  addMessage(@Body() addMessageDto: AddMessageDto) {
    return this.chatService.addMessage(addMessageDto);
  }
}
