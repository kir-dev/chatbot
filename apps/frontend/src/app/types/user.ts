import { Chat } from './chat';

export type User = {
  id: number;
  username: string;
  chats: Chat[];
};
