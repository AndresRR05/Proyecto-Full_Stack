import { ToDoRepository } from "../repositories/todo.repository";
import { ToDoDTO, ToDoUpdateDTO } from "../types/ToDoDTO";
export declare class ToDoService {
    Repo: ToDoRepository;
    status: "Pendiente" | "En Proceso" | "Finalizado" | null;
    constructor(toDoRepository: ToDoRepository);
    crearTarea(nuevaTarea: ToDoDTO): Promise<import("mongoose").Document<unknown, {}, import("../models/todo.model").ToDoInterface, {}, import("mongoose").DefaultSchemaOptions> & import("../models/todo.model").ToDoInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    actualizarDatosGenerales(cambios: ToDoUpdateDTO): Promise<(import("mongoose").Document<unknown, {}, import("../models/todo.model").ToDoInterface, {}, import("mongoose").DefaultSchemaOptions> & import("../models/todo.model").ToDoInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    actualizarEstado(id: string, status: string): Promise<{
        message: string;
    }>;
    eliminar(id: string): Promise<{
        Message: string;
    }>;
    leer(userId: string): Promise<(import("mongoose").Document<unknown, {}, import("../models/todo.model").ToDoInterface, {}, import("mongoose").DefaultSchemaOptions> & import("../models/todo.model").ToDoInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
}
export declare const service: ToDoService;
//# sourceMappingURL=ToDo.service.d.ts.map