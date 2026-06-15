import { Request, Response } from "express";
import { ToDoService } from "../service/ToDo.service";
export declare class ToDoController {
    todoService: ToDoService;
    constructor(service: ToDoService);
    actualizarTarea(req: Request, res: Response): Promise<void>;
    actualizarEstado(req: Request, res: Response): Promise<void>;
    crear(req: Request, res: Response): Promise<void>;
    eliminar(req: Request, res: Response): Promise<void>;
    leer(req: Request, res: Response): Promise<void>;
}
export declare const controller: ToDoController;
//# sourceMappingURL=todo.controller.d.ts.map