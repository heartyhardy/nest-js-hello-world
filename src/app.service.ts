import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): JSON {
    const msg = {
      message: 'Hello',
      server: 'us-east-2',
      timeStamp: '29/11/21',
    };
    return JSON.parse(JSON.stringify(msg));
  }
}
