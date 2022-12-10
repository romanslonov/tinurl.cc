import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.email) private userModel: Model<UserDocument>,
  ) {}

  async getProfile() {
    // const user = new this.userModel(data);
    // user.save();
  }
}
