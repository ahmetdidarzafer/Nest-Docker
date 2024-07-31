import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @IsNotEmpty()
  @ApiProperty({ description: 'updated username' })
  readonly username: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ description: 'updated mail' })
  readonly email: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'updated password' })
  readonly password: string;
}