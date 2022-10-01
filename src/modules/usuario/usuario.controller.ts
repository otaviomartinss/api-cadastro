import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';

@Controller('users')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  public cria(@Body() usuario: Usuario){
    
    return this.usuarioService.cria(usuario)
  }

  @Get(":id")
  public lista(@Param("id") id: number){
    return id
  }
}
