import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // only allow properties specified in DTO to be passed to the service
      forbidNonWhitelisted: true, // throw error if any properties not specified in DTO are passed to the service
      transform: true, // automatically transform the properties specified in DTO
    }),
  );

  /**
   * Swagger Configuration
   */
  const config = new DocumentBuilder()
    .setTitle('Blog App API Documentation 📄')
    .setDescription(
      'The Blog API provides endpoints for managing authentication, user accounts, and blog posts. Use the base API URL as http://localhost:3000',
    )
    .setTermsOfService('http:localhost:3000/terms-of-service')
    .setLicense(
      'MIT License',
      'https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt',
    )
    .addServer('http://localhost:3000', 'Testing Server')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(8080);
}
bootstrap();
