import { Module } from '@nestjs/common';
import { RoomModule } from './room/room.module';
import { MessageModule } from './message/message.module';

@Module({
    imports: [RoomModule, MessageModule],
    exports: [RoomModule, MessageModule]
})
export class ChatModule {}
