import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // only allow properties specified in DTO to be passed to the service
      forbidNonWhitelisted: true, // throw error if any properties not specified in DTO are passed to the service
      transform: true, // automatically transform the properties specified in DTO
    }),
  );
  await app.listen(8080);
}
bootstrap();
