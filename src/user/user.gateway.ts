import { Logger } from '@nestjs/common';
import { ConnectedSocket, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { hostname } from 'os';
import { Server, Socket } from 'socket.io';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import User from 'src/model/User';

@WebSocketGateway()
export class UserGateway {
    @WebSocketServer()
    server: Server;
    logger = new Logger(this.constructor.name);

    @SubscribeMessage('connect')
    async subscribe(
        @ConnectedSocket() client: Socket,
        @CurrentUser() user: User,
    ) {
        this.logger.log(`User ${user.displayName} joined the server ${hostname()}`);
        // TODO: handle subscribe socket server
        return user;
    }
}
