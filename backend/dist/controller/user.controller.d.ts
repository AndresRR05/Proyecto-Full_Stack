import { Request, Response } from "express";
import { UserService } from "../service/user.service";
export declare class UserController {
    Service: UserService;
    constructor(userService: UserService);
    login(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    register(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    update(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    delete(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    leer(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export declare const userController: UserController;
//# sourceMappingURL=user.controller.d.ts.map