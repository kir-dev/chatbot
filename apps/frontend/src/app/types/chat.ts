import { Message } from './message';

export type Chat = {
  id: number;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
};
