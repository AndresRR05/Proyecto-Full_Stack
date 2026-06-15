import { Model } from "mongoose";
import UserModel, { UserInterface } from "../models/user.model";
import { UserDTO, UserUpdateDTO } from "../types/userDTO";
export declare class UserRepository {
    UserModel: Model<UserInterface>;
    constructor(userModel: typeof UserModel);
    create(user: UserDTO): Promise<import("mongoose").Document<unknown, {}, UserInterface, {}, import("mongoose").DefaultSchemaOptions> & UserInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    findByEmail(email: string): Promise<(import("mongoose").Document<unknown, {}, UserInterface, {}, import("mongoose").DefaultSchemaOptions> & UserInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    findById(_id: string): Promise<(import("mongoose").Document<unknown, {}, UserInterface, {}, import("mongoose").DefaultSchemaOptions> & UserInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    find(): Promise<(import("mongoose").Document<unknown, {}, UserInterface, {}, import("mongoose").DefaultSchemaOptions> & UserInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    update(user: UserUpdateDTO): Promise<(import("mongoose").Document<unknown, {}, UserInterface, {}, import("mongoose").DefaultSchemaOptions> & UserInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    delete(_id: string): Promise<(import("mongoose").Document<unknown, {}, UserInterface, {}, import("mongoose").DefaultSchemaOptions> & UserInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
}
declare const userRepository: UserRepository;
export default userRepository;
//# sourceMappingURL=user.repository.d.ts.map