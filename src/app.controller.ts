import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SmsMessage } from './dto/sms-message.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post('sms/send')
  async getHello(@Body() payload: SmsMessage) {
    this.appService.send('send-sms-topic', {
      payload
    });
  }
}
