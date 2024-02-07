import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserInfo } from 'src/model/dto/user.info';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {

    }
    @Post("/signUp")
    async signUp(@Body("userInfo") userInfo: UserInfo) {
        const data = await this.userService.create(userInfo);
        return data;
    }

    @Post("/login")
    async login(@Body("loginId") loginId: string) {
        // TODO: implementation
        return true;
    }
}
