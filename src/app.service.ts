import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('rabbit-mq-module') private readonly client: ClientProxy,
  ) {}
  
  getHello(): string {
    return 'Hello World!';
  }

  public send(pattern: string, data: any) {
    return this.client.send(pattern, data).subscribe();
  }
}
