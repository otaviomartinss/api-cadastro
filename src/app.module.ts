import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { PrismaService } from './database/prisma/prisma.service';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpExceptionFilter } from './common/filter/HttpExceptionFilter';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: 
    [{
        provide: APP_INTERCEPTOR,
        useClass: ClassSerializerInterceptor,
      },
      {
        provide: APP_FILTER,
        useClass: HttpExceptionFilter
      },
      AppService, 
      PrismaService,
    ],
})
export class AppModule {}
