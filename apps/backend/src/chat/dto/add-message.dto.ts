export class AddMessageDto {
  //HACK: GET THIS FROM AUTH
  userId: number;
  chatId: number;
  message: string;
}
