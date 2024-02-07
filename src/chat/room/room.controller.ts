import { Controller, Get, Param, Post, Res } from '@nestjs/common';
import { RoomService } from './room.service';

@Controller('room')
export class RoomController {
    constructor(private readonly roomService: RoomService) { }

    @Post('/newRoom')
    async createRoom(@Res() res: Response, roomName: string) {
        console.log("# createRoom", arguments);
        // TODO: implementation
        let room = await this.roomService.createRoom(roomName);
        return room;
    }

    @Get('/joinRoom')
    async requestJoin(@Res() res: Response, roomId: number) {
        console.log("# requestJoin", arguments);
        // TODO: implementation

    }

    @Get('/rooms')
    async getAllRoom(@Res() res: Response) {
        console.log("# getAllRoom", arguments);
        // TODO: implementation

    }

    @Get('/history/:roomId')
    async getHistory(@Res() res: Response, @Param("roomId") roomId: number) {
        console.log("# getHistory", arguments);
        // TODO: implementation

    }}
