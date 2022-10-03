import { Body, ClassSerializerInterceptor, Controller, Get, HttpStatus, NotFoundException, Param, Post, Res, UseInterceptors } from '@nestjs/common';
import { NestResponse } from 'src/core/http/nestResponse';
import { NestResponseBuilder } from 'src/core/http/nestResponseBuilder';
import { UserDTO } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UseInterceptors(ClassSerializerInterceptor)
  public async create(@Body() user: UserDTO) {
    const createdUser = await this.userService.create(user)
    return new NestResponseBuilder()
            .comStatus(HttpStatus.CREATED)
            .comHeaders({
              "Location": `/users/${createdUser.username}`
            })
            .comBody(createdUser)
            .build()
  }

  @Get()
  public findAll(){
    const users = this.userService.findAll()
    if (!users){
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: "Nenhum usuário encontrado"
      })
    }
    return users
  }

  @Get(":username")
  public findByUsername(@Param("username") username:string){
    const user = this.userService.findByUsername(username)
    if (!user){
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: "Usuário não encontrado"
      })
    }
    return user
  }
}
