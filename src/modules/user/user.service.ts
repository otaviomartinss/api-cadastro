import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { UserDTO } from './user.entity';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService){}
    
    async create(data){
        const userCreated = await this.prisma.user.create({
            data,
        })
        
        return userCreated
    }

    async getAll(){
        return await this.prisma.user.findMany()
    }



    /* buscaPorNomeDeUsuario(nomeDeUsuario){
        return this.prisma.user.findUnique({
            where: {
                username: nomeDeUsuario,
            }
        })
    } */
}
