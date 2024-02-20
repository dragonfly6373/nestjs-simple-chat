import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserDto } from "./user.dto";

@Entity('room_users_view', { synchronize: false })
export default class RoomUsersDTO extends UserDto {
    @PrimaryGeneratedColumn('uuid', { name: "id"})
    id: number;
    @Column({name: 'room_id'})
    roomId: number;
}
