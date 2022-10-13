import {
  Injectable,
  OnApplicationShutdown,
  OnModuleInit,
} from '@nestjs/common';
import { Kafka, Producer, ProducerRecord } from 'kafkajs';

@Injectable()
export class KafkaService implements OnModuleInit, OnApplicationShutdown {
  private readonly kafka = new Kafka({
    brokers: [
      'dory-01.srvs.cloudkafka.com:9094',
      'dory-02.srvs.cloudkafka.com:9094',
      'dory-03.srvs.cloudkafka.com:9094',
    ],
    sasl: {
      mechanism: 'scram-sha-256',
      username: '4umzef79',
      password: 'aH41zk2nMRkv367_q8XYjOFp53Fr6s8d',
    },
    ssl: true,
  });

  private readonly producer: Producer = this.kafka.producer();

  async onModuleInit() {
    await this.producer.connect();
  }

  async produce(record: ProducerRecord) {
    await this.producer.send(record);
  }

  async onApplicationShutdown() {
    await this.producer.disconnect();
  }
}
