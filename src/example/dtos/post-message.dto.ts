import { Message } from '../interfaces/message.interface';

export class PostMessageDto {
  topic: string;
  messages: Message[];
}
