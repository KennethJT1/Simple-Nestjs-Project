import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocument>,
  ) {}

  async createUser(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async allUsers(): Promise<User[]> {
    return this.userModel.find();
  }

  async updateUsers(id, data): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteUsers(id: string) {
    const deleteUser = this.userModel.findByIdAndRemove(id);
    if (deleteUser) return [];
  }
}
