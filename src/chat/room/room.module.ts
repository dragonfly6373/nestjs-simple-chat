import { Module } from '@nestjs/common';
import { RoomGateway } from './room.gateway';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomDto } from 'src/model/dto/room.dto';

@Module({
    imports: [TypeOrmModule.forFeature([RoomDto])],
    providers: [RoomGateway, RoomService],
    controllers: [RoomController]
})
export class RoomModule {}
