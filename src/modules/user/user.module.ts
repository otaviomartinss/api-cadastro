import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UsuarioController } from './user.controller';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Module({
  controllers: [UsuarioController],
  providers: [UserService, PrismaService]
})
export class UserModule {}
