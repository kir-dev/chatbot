export enum SentBy {
  USER,
  BOT,
}

export type Message = {
  id: number;
  message: string;
  createdAt: Date;
  index: number;
  sentBy: SentBy;
};
