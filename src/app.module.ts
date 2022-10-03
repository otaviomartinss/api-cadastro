import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { PrismaService } from './database/prisma/prisma.service';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: 
    [{
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
      },
      AppService, 
      PrismaService,
    ],
})
export class AppModule {}
