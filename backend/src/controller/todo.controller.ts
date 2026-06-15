import { Request, Response } from "express";
import { service, ToDoService } from "../service/ToDo.service";
import { BadRequestError } from "../utils/errors/BadRequesteError";
import { ToDoDTO } from "../types/ToDoDTO";

export class ToDoController{
    todoService: ToDoService;
    constructor(service: ToDoService) {
        this.todoService = service;
    }

    async actualizarTarea(req: Request, res: Response) {
        const datos = req.body
        try {
        const respuesta = await this.todoService.actualizarDatosGenerales(datos)
        res.json(respuesta)
        } catch (error) {
            console.error(error)
            res.status(500).json({message: "Ocurrio un error, intente nuevamente"})
        }
    }

    async actualizarEstado(req: Request, res: Response) {
        const {id} = req.params
        const {status} = req.body
        try {
            const respuesta = await this.todoService.actualizarEstado(id as string, status)
            res.json(respuesta)
        } catch (error: BadRequestError | any) {
            if (typeof error == typeof BadRequestError) {
                res.status(error.statusCode).json({message: error.message})
            }
            else{
                res.status(500).json({message: "Ocurrio un error, intente nuevamente"})
            }
        }
    }

    async crear(req: Request, res: Response) {
        const {userId, title, description, endDate} = req.body
        const resultado = await this.todoService.crearTarea({userId, title, description, endDate} as ToDoDTO)
        res.json(resultado)
    }

    async eliminar(req: Request, res: Response) {
        const {id} = req.params
        const resultado = await this.todoService.eliminar(id as string)
        res.json(resultado)
    }

    async leer(req: Request, res: Response) {
        const {userId} = req.params
        const resultado = await this.todoService.leer(userId as string)
        res.json(resultado)
    }
} 

export const controller = new ToDoController(service)