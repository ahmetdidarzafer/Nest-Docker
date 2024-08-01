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
  @ApiProperty({description: 'old password'})
  old_password: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'new password' })
  password: string;
}