/**
 * define User DTO
 */
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    OneToMany,
} from 'typeorm';
import { JoinRoomDto } from './joinRoom.dto';
import IUser from '../interface/user.interface';

// status: 1 - active | 0 - inactive
export const UserStatus = {
    ACTIVE: 1,
    INACTIVE: 0
};

@Entity("user", { synchronize: false })
export class UserDto implements IUser {
    @PrimaryGeneratedColumn('uuid', { name: "id"})
    id: number;
    @Column({name: "login_id"})
    loginId: string;
    @Column({name: "login_password"})
    password: number;
    @Column({name: "account_type"})
    accountType: number;
    @Column({name: "status"})
    status: number;
    @CreateDateColumn({type: 'timestamptz', name: "created_date"})
    createdDate: Date;
    @CreateDateColumn({type: 'timestamptz', name: "updated_date"})
    updatedDate: Date;
    @Column({name: "display_name"})
    displayName: string;
    @OneToMany(() => JoinRoomDto, (joinRoom) => joinRoom.userId)
    userToRoom: JoinRoomDto[];
}
