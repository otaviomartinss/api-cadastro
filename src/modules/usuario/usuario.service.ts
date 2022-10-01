import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsuarioService {
    constructor(private readonly prisma: PrismaService){}
    
    cria(usuario){
        return this.prisma.user.create(usuario)
    }
}
