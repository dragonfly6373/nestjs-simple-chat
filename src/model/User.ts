import { IUser } from "./interface/user.interface";

export default class User implements IUser {
    loginId: string;
    accountType: number;
    status: number;
    createdDate: Date;
    displayName: string;

    constructor(loginId: string, accountType: number, status: number, createdDate: Date, displayName: string) {
        this.loginId = loginId;
        this.accountType = accountType;
        this.status = status;
        this.createdDate = createdDate;
        this.displayName = displayName;
    }
}