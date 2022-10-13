import { Inject, Injectable } from '@nestjs/common';
import { KafkaService } from 'src/kafka/kafka.service';
import { Message } from './interfaces/message.interface';

@Injectable()
export class ExampleService {
  constructor(private readonly kafkaService: KafkaService) {}

  async postMessage(topic: string, messages: Message[]) {
    await this.kafkaService.produce({ topic, messages });
  }
}
