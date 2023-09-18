import { Injectable } from '@nestjs/common';
import { S3Client, ListBucketsCommand, Bucket } from '@aws-sdk/client-s3'; // ES Modules import

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getBuckets(): Promise<Array<Bucket>> {
    const client = new S3Client({ region: 'eu-west-1' });
    const command = new ListBucketsCommand({});
    return await client.send(command).then((res) => res.Buckets);
  }
}
