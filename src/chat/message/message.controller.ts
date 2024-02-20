import { Body, Controller, Get, Param, Query } from '@nestjs/common';
import { ChatMessageDto } from 'src/model/dto/chatMessage.dto';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
    constructor(private readonly messageService: MessageService) {}

    @Get('send')
    async sendMessage(@Query("roomId") roomId: number, @Query("type") type: string, @Query("content") content: string) {
        console.log("# sendMessage", arguments);
        // TODO: implementation
        return true;
    }

    @Get('update')
    async updateMessage(@Query("roomId") roomId: number, @Query("type") type: string, @Query("content") content: string) {
        console.log("# updateMessage", arguments);
        // TODO: implementation
        return true;
    }

    @Get('delete')
    async deleteMessage(@Query("roomId") roomId: number, @Query() messageId: number) {
        console.log("# deleteMessage", arguments);
        // TODO: implementation
        return true;
    }
}
