import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bodyParser from 'body-parser';

import { AppModule } from './app.module';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const configService = app.get(ConfigService);

  app.use(
    bodyParser.json({
      limit: configService.get('APP_LIMITE_TAMANIO_ARCHIVO'),
    }),
  );
  app.use(
    bodyParser.urlencoded({
      limit: configService.get('APP_LIMITE_TAMANIO_ARCHIVO'),
      extended: true,
    }),
  );
  //escucha hacia afuera
  app.enableCors();
  await app.listen(configService.get('APP_PUERTO'));

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
