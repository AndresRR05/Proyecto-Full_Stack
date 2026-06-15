import { Model } from "mongoose";
import UserModel, { UserInterface } from "../models/user.model";
import { UserDTO, UserUpdateDTO } from "../types/userDTO";

export class UserRepository {
    UserModel: Model<UserInterface>;

    constructor(userModel: typeof UserModel) {
        this.UserModel = userModel;
    }
    async create(user:UserDTO) {
        return await this.UserModel.insertOne(user);
    }

    async findByEmail(email: string) {
        return await this.UserModel.findOne({ email: email });
    }

    async findById(_id: string){
        return await this.UserModel.findOne({_id});
    }

    async find(){
        return await this.UserModel.find();
    }

    async update(user: UserUpdateDTO) {
        return await this.UserModel.findOneAndUpdate({_id: user._id}, user);
    }

    async delete(_id: string) {
        return await this.UserModel.findOneAndDelete({_id});
    }
}

const userRepository = new UserRepository(UserModel);

export default userRepository;