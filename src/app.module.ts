import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ChatModule } from './chat/chat.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDto } from './model/dto/user.dto';
import { RoomDto } from './model/dto/room.dto';
import { ChatMessageDto } from './model/dto/chatMessage.dto';
import { JoinRoomDto } from './model/dto/joinRoom.dto';
import { AuthModule } from './auth/auth.module';
import UserRoomsDto from './model/dto/userRooms.dto';
import RoomUsersDTO from './model/dto/roomUsers.dto';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'my-postgres',
            port: 5432,
            username: 'postgres',
            password: 'postgres',
            database: 'demo-chat',
            entities: [UserDto, RoomDto, ChatMessageDto, JoinRoomDto, UserRoomsDto, RoomUsersDTO],
            synchronize: true,
        }),
        UserModule,
        ChatModule,
        AuthModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
