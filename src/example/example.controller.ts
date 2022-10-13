import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { PostMessageDto } from './dtos/post-message.dto';
import { ExampleService } from './example.service';

@Controller('example')
@ApiTags('Example Controller')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() postMessageDto: PostMessageDto): Promise<any> {
    const { topic, messages } = postMessageDto;
    return await this.exampleService.postMessage(topic, messages);
  }
}
