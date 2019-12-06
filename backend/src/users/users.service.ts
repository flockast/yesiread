import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.model';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async create(username: string, password: string) {
        const createdCat = new this.userModel({
            username,
            password,
        });

        const user = await createdCat.save();

        return {
            id: user.id,
            username: user.username,
            password: user.password,
        };
    }

    async findAll() {
        const users = await this.userModel.find().exec();

        return users.map(user => ({
            id: user.id,
            username: user.username,
            password: user.password,
        }));
    }

    async getSingleUser(userId: string) {
        const user = await this.findUser(userId);

        return {
            id: user.id,
            username: user.username,
            password: user.password,
        };
    }

    async updateUser(userId: string, username: string, password: string) {
        const updatedUser = await this.findUser(userId);

        if (username) {
            updatedUser.username = username;
        }

        if (password) {
            updatedUser.password = password;
        }

        await updatedUser.save();

        return {
            id: updatedUser.id,
            username: updatedUser.username,
            password: updatedUser.password,
        };
    }

    async deleteUser(userId: string) {
        const result = await this.userModel.deleteOne({_id: userId}).exec();

        if (result.n === 0) {
            throw new NotFoundException('Could not find user.');
        }
    }

    async findOneByName(username: string): Promise<User | null> {
        return await this.userModel.findOne({username}).exec();
    }

    private async findUser(userId: string): Promise<User> {
        let user;

        try {
            user = await this.userModel.findById(userId).exec();
        } catch (error) {
            throw new NotFoundException('Could not find user');
        }

        if (!user) {
            throw new NotFoundException('Could not find user');
        }

        return user;
    }
}
