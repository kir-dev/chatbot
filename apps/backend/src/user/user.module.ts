import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [PrismaModule.forRoot({ isGlobal: true })],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
