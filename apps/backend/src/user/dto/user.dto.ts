export class UserDto {
  id: number;
  username: string;
  chats: ChatDto[];
}

export class ChatDto {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  messages?: MessageDto[];
}

class MessageDto {
  id: number;
  index: number;
  message: string;
  sentByBot: boolean;
}
