import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, ValidationPipe, UsePipes } from "@nestjs/common";
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@Controller('user')
@ApiBearerAuth()
@ApiTags("User")
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('findUser/:id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }
  @Post('createUser')
  @UsePipes(new ValidationPipe())
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
  @Get()
  findAll(){
    return this.userService.findAll();
  }

  @Patch('updateUser/:id')
  @UsePipes(new ValidationPipe())
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete('deleteUser/:id')
  remove(@Param('id') id: number) {
    return this.userService.remove(id);
  }
}
 