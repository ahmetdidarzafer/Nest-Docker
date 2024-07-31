import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'azafer',
      password: 'ahmet123',
      database: 'movie_db',
      entities: [User], 
      synchronize: true,
      logging: true
    }),
    UsersModule
  ]
})
export class AppModule {}
