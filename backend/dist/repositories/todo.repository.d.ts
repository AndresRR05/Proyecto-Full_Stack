import { Model } from 'mongoose';
import { ToDoInterface } from '../models/todo.model';
import { ToDoDTO, ToDoUpdateDTO } from '../types/ToDoDTO';
export declare class ToDoRepository {
    ToDo: Model<ToDoInterface>;
    constructor(model: Model<ToDoInterface>);
    create(nuevaTarea: ToDoDTO): Promise<import("mongoose").Document<unknown, {}, ToDoInterface, {}, import("mongoose").DefaultSchemaOptions> & ToDoInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    read(userId: string): Promise<(import("mongoose").Document<unknown, {}, ToDoInterface, {}, import("mongoose").DefaultSchemaOptions> & ToDoInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    update(datosActualizar: ToDoUpdateDTO): Promise<(import("mongoose").Document<unknown, {}, ToDoInterface, {}, import("mongoose").DefaultSchemaOptions> & ToDoInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    delete(_id: string): Promise<(import("mongoose").Document<unknown, {}, ToDoInterface, {}, import("mongoose").DefaultSchemaOptions> & ToDoInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
}
export declare const toDoRepository: ToDoRepository;
//# sourceMappingURL=todo.repository.d.ts.map