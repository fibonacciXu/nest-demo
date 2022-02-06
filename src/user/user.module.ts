// 创建一个 user mod
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
