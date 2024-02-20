import { Body, Controller, Post, Request } from '@nestjs/common';
import { UserService } from './user.service';
import User from 'src/model/User';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {

    }
    @Post("signup")
    async signUp(@Request() req, @Body() userInfo: User) {
        console.log("# signUp", req.body, userInfo);
        const data = await this.userService.create(userInfo);
        return data;
    }

    @Post("login")
    async login(@Request() req, @Body() userInfo: User) {
        console.log("# login", req.body, userInfo);
        // TODO: implementation
        return true;
    }
}
