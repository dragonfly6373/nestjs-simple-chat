import { Controller, Get, Param, Post, Query, Res } from '@nestjs/common';
import { RoomService } from './room.service';

@Controller('room')
export class RoomController {
    constructor(private readonly roomService: RoomService) { }

    @Post('create')
    async createRoom(roomName: string) {
        console.log("# createRoom", arguments);
        // TODO: implementation
        let room = await this.roomService.createRoom(roomName);
        return room;
    }

    @Post('delete')
    async deleteRoom(roomId: number) {
        console.log("# deleteRoom", arguments);
        // TODO: implementation
        let room = await this.roomService.deleteRoom(roomId);
        return true;
    }

    @Get(':roomId')
    async roomInfo(@Param("roomId") roomId: number) {
        console.log("# requestJoin", arguments);
        // TODO: implementation
        return {};
    }

    @Get('list')
    async getAllRoom() {
        console.log("# getAllRoom", arguments);
        // TODO: implementation
        return [];
    }

    @Get(':roomId/members')
    async getRoomMembers(@Param("roomId") roomId: number) {
        console.log("# getRoomMembers", arguments);
        // TODO: implementation
        return [];
    }

    @Get(':roomId/messages')
    async getRoomMessages(@Param("roomId") roomId: number, @Query("offset") offset: number) {
        console.log("# getRoomMessages", arguments);
        // TODO: implementation
        return [];
    }

    @Get(':roomId/join')
    async requestJoin(@Param("roomId") roomId: number) {
        console.log("# requestJoin", arguments);
        // TODO: implementation
        return [];
    }

    @Get(':roomId/approve')
    async approve(@Param("roomId") roomId: number, @Query("userId") userId: number) {
        console.log("# approve", arguments);
        // TODO: implementation
        return true;
    }

    @Get(':roomId/reject')
    async reject(@Param("roomId") roomId: number, @Query("userId") userId: number) {
        console.log("# reject", arguments);
        // TODO: implementation
        return true;
    }

    @Get(':roomId/kick')
    async kick(@Param("roomId") roomId: number, @Query("userId") userId: number) {
        console.log("# kick", arguments);
        // TODO: implementation
        return true;
    }
}
