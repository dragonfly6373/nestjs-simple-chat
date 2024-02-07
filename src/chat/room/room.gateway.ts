import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { RoomService } from './room.service';
import { Inject, forwardRef } from '@nestjs/common';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class RoomGateway {
    @WebSocketServer() server: Server;

    constructor(
        @Inject(forwardRef(() => RoomService)) private roomService: RoomService,
    ) { }

    handleDisconnect(socket: Socket) {
        // TODO: handle unsubscribeSocket socket
    }

    @SubscribeMessage('room:join')
    async subscribe(
        @ConnectedSocket() client: Socket,
        @MessageBody() roomId: string,
    ) {
        // TODO: handle subscribe room
        return roomId;
    }
}
