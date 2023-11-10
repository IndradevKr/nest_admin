import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import { RegisterDto } from "./dtos/register.dto";

@Controller()
export class AuthController {

    constructor(private userService: UserService){}
    
    @Post('register')
    async register(@Body() body: RegisterDto) {
        return await this.userService.createUser(body);
    }
}