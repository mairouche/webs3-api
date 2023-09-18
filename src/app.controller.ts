import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Bucket } from '@aws-sdk/client-s3';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/buckets')
  async getBuckets(): Promise<Array<Bucket>> {
    return this.appService.getBuckets();
  }
}
