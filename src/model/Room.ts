import IRoom from "./interface/room.interface";

export default class Room implements IRoom {
    name: string;
    status: number;
    createdBy: number;

    constructor(name: string, status: number, createdBy: number) {
        this.name = name;
        this.status = status;
        this.createdBy = createdBy
    }
}