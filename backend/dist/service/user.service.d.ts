import { UserInterface } from "../models/user.model";
import { UserRepository } from "../repositories/user.repository";
import { LoginDTO, UserDTO, UserUpdateDTO } from "../types/userDTO";
export declare class UserService {
    Repo: UserRepository;
    constructor(UserR: UserRepository);
    registrarse(newUser: UserDTO): Promise<import("mongoose").Document<unknown, {}, UserInterface, {}, import("mongoose").DefaultSchemaOptions> & UserInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    iniciarSesion(user: LoginDTO): Promise<string>;
    actualizar(datos: UserUpdateDTO): Promise<import("mongoose").Document<unknown, {}, UserInterface, {}, import("mongoose").DefaultSchemaOptions> & UserInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    eliminar(id: string): Promise<import("mongoose").Document<unknown, {}, UserInterface, {}, import("mongoose").DefaultSchemaOptions> & UserInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    leer(): Promise<(import("mongoose").Document<unknown, {}, UserInterface, {}, import("mongoose").DefaultSchemaOptions> & UserInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
}
declare const userService: UserService;
export default userService;
//# sourceMappingURL=user.service.d.ts.map