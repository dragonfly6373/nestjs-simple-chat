import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserGateway } from './user.gateway';
import { UserDto } from 'src/model/dto/user.dto';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserDto])],
  controllers: [UserController],
  providers: [UserService, UserGateway]
})
export class UserModule {}
