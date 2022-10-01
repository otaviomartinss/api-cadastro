import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserDTO } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  public create(@Body() user: UserDTO){
    
    return this.userService.create(user)
  }

  @Get()
  public findAll(){
    const users = this.userService.findAll()
    
    return users
  }

  @Get(":username")
  public findByUsername(@Param("username") username:string){
    const user = this.userService.findByUsername(username)
    
    return user
  }
}
