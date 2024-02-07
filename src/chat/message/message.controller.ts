import { Body, Controller, Get, Param } from '@nestjs/common';
import { ChatMessageDto } from 'src/model/dto/chatMessage.dto';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
    constructor(private readonly messageService: MessageService) {}
    @Get('/sendMessage')
    async sendMessage(@Body() message: ChatMessageDto) {
        console.log("# sendMessage", arguments);
        // TODO: implementation
    }

    @Get(':roomId')
    async getRoomMessage(@Param('roomId') roomId: number) {
        let offset = 0;
        let size = 100
        this.messageService.getRoomMessages(roomId, offset, size);
    }

    @Get('/deleteMessage')
    async deleteMessage(@Body() messageId: number) {
        console.log("# deleteMessage", arguments);
        // TODO: implementation
    }
}
