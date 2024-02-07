import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { Logger } from '@nestjs/common';

config();
const env = process.env;
const logger = new Logger('NestApplication');

async function bootstrap() {
    const port = Number(env.PORT || 3000);
    const app = await NestFactory.create(AppModule);
    await app.listen(port, () =>
      logger.log(`Server initialized on port ${port}`),
    );
}
bootstrap();
