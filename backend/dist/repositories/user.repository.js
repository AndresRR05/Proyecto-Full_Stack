"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
class UserRepository {
    constructor(userModel) {
        this.UserModel = userModel;
    }
    async create(user) {
        return await this.UserModel.insertOne(user);
    }
    async findByEmail(email) {
        return await this.UserModel.findOne({ email: email });
    }
    async findById(_id) {
        return await this.UserModel.findOne({ _id });
    }
    async find() {
        return await this.UserModel.find();
    }
    async update(user) {
        return await this.UserModel.findOneAndUpdate({ _id: user._id }, user);
    }
    async delete(_id) {
        return await this.UserModel.findOneAndDelete({ _id });
    }
}
exports.UserRepository = UserRepository;
const userRepository = new UserRepository(user_model_1.default);
exports.default = userRepository;
//# sourceMappingURL=user.repository.js.map