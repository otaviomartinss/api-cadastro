import { Body, Controller, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller('users')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  public cria(@Body() usuario){
    console.log(usuario)
    return usuario
  }
}
