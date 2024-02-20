import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { RoomDto } from "./room.dto";

@Entity('user_rooms_view', { synchronize: false })
export default class UserRoomsDto extends RoomDto {
    @PrimaryGeneratedColumn('uuid', { name: "id"})
    id: number;
    @Column({name: 'user_id'})
    userId: number;
}
