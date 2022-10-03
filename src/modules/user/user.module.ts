import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { IsUsernameAlreadyExist, IsUsernameAlreadyExistConstraint } from './isUsernameAlreadyExist.validator';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService, IsUsernameAlreadyExistConstraint]
})
export class UserModule {}
