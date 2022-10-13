import { Module } from '@nestjs/common';
import { KafkaModule } from 'src/kafka/kafka.module';
import { ExampleController } from './example.controller';
import { ExampleService } from './example.service';

@Module({
  imports: [KafkaModule],
  providers: [ExampleService],
  controllers: [ExampleController],
})
export class ExampleModule {}
