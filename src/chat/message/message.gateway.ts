import { MessageBody, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import ChatMessage from 'src/model/ChatMessage';
import User from 'src/model/User';

@WebSocketGateway()
export class MessageGateway {
    @SubscribeMessage('message')
    async sendDirectMessage(
        @MessageBody() body: ChatMessage,
        @CurrentUser() user: User
    ) {
        // TODO: implementation
        return 'Hello world!';
    }

    @SubscribeMessage('message:room')
    async sendRoomMessage(
      @MessageBody() body: ChatMessage,
      @CurrentUser() user: User,
    ) {
        // TODO: implementation
    }
}
