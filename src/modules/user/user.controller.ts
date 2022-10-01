import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserDTO } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UsuarioController {
  constructor(private readonly userService: UserService) {}

  @Post()
  public create(@Body() user: UserDTO){
    
    return this.userService.create(user)
  }

  @Get()
  public getAll(){
    const users = this.userService.getAll()
    
    return users
  }

  /* @Get("nomeDeUsuario")
  public BuscaPorNomeDeUsuario(@Param("nomeDeUsuario") nomeDeUsuario:string){
    const usuario = this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario)
  } */
}
