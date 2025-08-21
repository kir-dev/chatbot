import { Message } from '@prisma/client';

export class Chat {
  id: number;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
  userId: number;
}
