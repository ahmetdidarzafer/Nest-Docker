import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { MoviesModule } from './movies/movies.module';
import { Movie } from './movies/entities/movie.entity';
import { AuthMiddleware } from './middleware/auth.middleware';
import { JwtModule } from '@nestjs/jwt';



@Module({
  imports: [
    JwtModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'azafer',
      password: 'ahmet123',
      database: 'movie_db',
      entities: [User, Movie], 
      synchronize: true,
      logging: true
    }),
    UsersModule,
    MoviesModule
  ]
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('movies')
  }
}
