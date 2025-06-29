import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUserById(id: number): Promise<UserDto> {
    const user = await this.prisma.user.findFirst({
      where: { id: id },
      // Ezzel a chats-et is megkapjuk
      include: {
        chats: {
          // Ezzel a messages-t is megkapjuk
          include: {
            messages: true,
          },
        },
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return {
      id: user.id,
      username: user.username,
      // map: Egy ciklus, ahol az összes visszatérési érték egy listába kerül
      // Itt a user.chats elemeken végigfutunk és az összesre létrehozunk egy {id, createdAt, updatedAt, messages} objektumot
      chats: user.chats.map((chat) => ({
        id: chat.id,
        createdAt: chat.createdAt,
        updatedAt: chat.updatedAt,
        // Itt a chat.messages elemeken végigfutunk és az összesre létrehozunk egy {id, index, message, sentByBot} objektumot
        messages: chat.messages.map((message) => ({
          id: message.id,
          index: message.index,
          message: message.message,
          sentByBot: message.sentBy == 'USER',
        })),
      })),
    };
  }

  async getAllUsers(): Promise<UserDto[]> {
    const users = await this.prisma.user.findMany({
      include: {
        chats: {
          include: {
            messages: true,
          },
        },
      },
    });

    return users.map((user) => ({
      id: user.id,
      username: user.username,
      chats: user.chats.map((chat) => ({
        id: chat.id,
        createdAt: chat.createdAt,
        updatedAt: chat.updatedAt,
        messages: chat.messages.map((message) => ({
          id: message.id,
          index: message.index,
          message: message.message,
          sentByBot: message.sentBy == 'USER',
        })),
      })),
    }));
  }

  async createUser(data: CreateUserDto): Promise<UserDto> {
    const user = await this.prisma.user.create({
      data,
    });

    return {
      id: user.id,
      username: user.username,
      chats: [],
    };
  }

  async deleteUser(id: number): Promise<void> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    await this.prisma.user.delete({
      where: { id },
    });
  }
}
