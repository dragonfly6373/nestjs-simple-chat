import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
} from 'typeorm';
import { JoinRoomDto } from './joinRoom.dto';
import IRoom from '../interface/room.interface';

export const RoomStatus = {
    ACTIVE: 1,
    INACTIVE: 0
};

@Entity("room", { synchronize: false })
export class RoomDto implements IRoom {
    @PrimaryGeneratedColumn('uuid', { name: "id"})
    id: number;
    @Column({name: "name"})
    name: string;
    @Column({name: "created_by"})
    createdBy: number;
    @Column({name: "created_date"})
    createdDate: number;
    @Column({name: "updated_date"})
    updatedDate: number;
    @Column({name: "status"})
    status: number;
    @OneToMany(() => JoinRoomDto, joinRoom => joinRoom.roomId)
    roomToUser: JoinRoomDto[];
}
