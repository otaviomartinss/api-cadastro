import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { UserDTO } from './user.entity';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService){}
    
    async create(data){
        const createdUser = await this.prisma.user.create({
            data,
        })
        return createdUser
    }

    async findAll(){
        return await this.prisma.user.findMany()
    }



    async findByUsername(username: string){
        const user = await this.prisma.user.findMany({
            where: {
                username: username,
            },
        })
        if (user.length == 0){
            return [`User ${username} not found`]
        }
        else {
            return user
        }
    }


    async usernameExists(username: string){
        const user = await this.prisma.user.findMany({
            where: {
                username: username,
            },
        })
        if (user.length == 0){
            return !false
        }
        else {
            return !true
        }
    }
}
