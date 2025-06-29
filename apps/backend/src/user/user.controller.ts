import { Body, Controller, Get, Post, Param, BadRequestException, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<UserDto> {
    const userId = parseInt(id, 10);
    if (isNaN(userId)) {
      throw new BadRequestException('Invalid user ID');
    }
    return this.userService.getUserById(userId);
  }

  @Get()
  async getAllUsers(): Promise<UserDto[]> {
    return this.userService.getAllUsers();
  }

  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<UserDto> {
    return this.userService.createUser(dto);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<void> {
    const userId = parseInt(id, 10);
    if (isNaN(userId)) {
      throw new BadRequestException('Invalid user ID');
    }
    return this.userService.deleteUser(userId);
  }
}
