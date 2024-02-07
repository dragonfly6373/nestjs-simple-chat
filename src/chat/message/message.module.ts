import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageGateway } from './message.gateway';
import { MessageController } from './message.controller';
import { ChatMessageDto } from 'src/model/dto/chatMessage.dto';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([ChatMessageDto])],
    providers: [MessageService, MessageGateway],
    controllers: [MessageController]
})
export class MessageModule { }
