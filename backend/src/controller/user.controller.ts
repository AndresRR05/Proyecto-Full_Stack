// Internet manda archivos JSON y URLS todo siempre en texto plano
// Internet recibe archivo JSON y texto plano
// El servidor recibe Typescript o JavaScript

import { Request, Response } from "express";
import userService, { UserService } from "../service/user.service";
import { UserDTO } from "../types/userDTO";

export class UserController{
    Service:UserService
    constructor(userService:UserService){
        this.Service = userService
    }

    async login(req:Request, res:Response){
        const {email, password} = req.body;
        if (!email || !password) return res.status(400).json({message: "Faltan datos"})

        try {
            const respuesta = await this.Service.iniciarSesion({email, password});
            return res.json({token: respuesta})
        } catch (error: any){
            if (error.message && error.message == "Usuario no encontrado")
                return res.status(404).json({message: error.message})
            if (error.message && error.message == "Correo o contraseña incorrectos, intenta de nuevo 😵")
                return res.status(401).json({message:error.message})
            console.error(error)
            return res.status(500).json({message: "Error interno del servidor"})
        }
    }

    async register(req: Request, res: Response){
        const {name, email, password} = req.body;
        if (!name || !email || !password) return res.status(400).json({message: "Faltan datos"})
        
        try {
            const respuesta = await this.Service.registrarse({name, email, password} as UserDTO);
            return res.json({token: respuesta})
        } catch (error: any){
            if (error.message && error.message.toLowerCase().includes("duplicate")){
                return res.status(409).json({message: "El correo electrónico ya está registrado"})
            }
            console.error(error)
            return res.status(500).json({message: "Error interno del servidor", error: error.message})
        }

    }

    async update(req: Request, res: Response) {
            const _id= req.body;
            if (!_id) return res.status(400).json({message: "Faltan datos"})

                try {
                    const respuesta = await this.Service.actualizar(_id);
                    return res.json({token: respuesta})
                } catch (error: any) {
                    if (error.message && error.message == "Usuario no encontrado")
                        return res.status(404).json({message: error.message})
                    console.error(error)
                    return res.status(500).json({message: "Error interno del servidor"})
                }
    }

    async delete(req: Request, res: Response) {
        const id= req.body._id;
        if (!id) return res.status(400).json({message: "Faltan datos"})

            try {
                const respuesta = await this.Service.eliminar(id);
                return res.json({token: respuesta})
            } catch (error: any) {
                if (error.message && error.message == "Usuario no encontrado")
                    return res.status(404).json({message: error.message})
                console.error(error)
                return res.status(500).json({message: "Error interno del servidor"})
            }
    }
    
    async leer(req: Request, res: Response) {
        try {
            const listaUsuarios = await this.Service.leer();
            return res.json(listaUsuarios);
        } catch (error: any) {
            console.error(error)
            return res.status(500).json({message: error.message})
        }
    }
}

export const userController = new UserController(userService);