import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.model';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
      MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
  ],
  providers: [ UsersService ],
  exports: [ UsersService ],
  controllers: [ UsersController ],
})
export class UsersModule {}
