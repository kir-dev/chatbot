import { Injectable } from '@nestjs/common';
import { AddMessageDto } from './dto/add-message.dto';

@Injectable()
export class ChatService {
  addMessage(addMessageDto: AddMessageDto) {
    throw new Error('Method not implemented.');
  }
}
