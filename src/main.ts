import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { AppConfig } from './app.config';

const logger = new Logger('NestApplication');

async function bootstrap() {
    const port = AppConfig.port;
    const app = await NestFactory.create(AppModule);
    await app.listen(port, () =>
      logger.log(`Server initialized on port ${port}`),
    );
}
bootstrap();
