import { Module } from '@nestjs/common';
import { RoomGateway } from './room.gateway';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomDto } from 'src/model/dto/room.dto';
import { UserDto } from 'src/model/dto/user.dto';
import { ChatMessageDto } from 'src/model/dto/chatMessage.dto';
import { JoinRoomDto } from 'src/model/dto/joinRoom.dto';

@Module({
    imports: [TypeOrmModule.forFeature([RoomDto, UserDto, JoinRoomDto, ChatMessageDto])],
    providers: [RoomGateway, RoomService],
    controllers: [RoomController]
})
export class RoomModule {}
