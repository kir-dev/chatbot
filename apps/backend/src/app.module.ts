import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [UserModule, PrismaModule.forRoot({ isGlobal: true }), ChatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
