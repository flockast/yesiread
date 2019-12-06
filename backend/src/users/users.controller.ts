import { Controller, Body, Param, Get, Post, Patch, Delete } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    addUser(
        @Body('username') username: string,
        @Body('password') password: string,
    ): any {
        return this.usersService.create(username, password);
    }

    @Get()
    getAllUsers(): any {
        return this.usersService.findAll();
    }

    @Get(':id')
    getUser(@Param('id') userId: string) {
        return this.usersService.getSingleUser(userId);
    }

    @Patch(':id')
    updateUser(
        @Param('id') userId: string,
        @Body('username') username: string,
        @Body('password') password: string,
    ) {
        return this.usersService.updateUser(userId, username, password);
    }

    @Delete(':id')
    async deleteUser(@Param('id') userId: string) {
        await this.usersService.deleteUser(userId);
        return null;
    }
}
