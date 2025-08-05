import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('login')
  async login(@Query('username') username: string): Promise<UserDto> {
    if (!username) {
      throw new BadRequestException('Username is required');
    }
    return this.userService.getUserByName(username);
  }

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
