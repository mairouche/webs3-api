import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://ec2-52-212-135-73.eu-west-1.compute.amazonaws.com'],
    methods: ['GET', 'POST'],
  });
  await app.listen(3000);
}
bootstrap();
