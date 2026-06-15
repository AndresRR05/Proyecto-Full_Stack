import { UserInterface } from "../models/user.model";
import userRepository, { UserRepository } from "../repositories/user.repository";
import { LoginDTO, UserDTO, UserUpdateDTO } from "../types/userDTO";

export class UserService{
    Repo: UserRepository;
    constructor(UserR: UserRepository){
        this.Repo= UserR
    }

    async registrarse(newUser: UserDTO){
        try{
            return await this.Repo.create(newUser);
        } catch (error: any){
            console.log(error)
            throw new Error(error.message || "Error interno, intenta de nuevo mas tarde")
        }
    }

    async iniciarSesion(user: LoginDTO){
        try{
            const usuarioGuardado: UserInterface | any= await this.Repo.findByEmail(user.email);
            if (!usuarioGuardado){
                throw new Error("Usuario no encontrado");
            }
            if (usuarioGuardado.password != user.password){
                throw new Error("Credenciales incorrectas")
            }
            return btoa(String(usuarioGuardado._id))
        } catch (error: any){
            console.error(error);
            throw new Error(error.message || "Error interno del servidor")
            
        }
    }

    async actualizar(datos: UserUpdateDTO){
        try {
            const usuario = await this.Repo.update(datos);
            if (usuario) return usuario;
            else throw new Error("Usuario no encontrado");
        } catch (error: any) {
            throw new Error("Error: " + error.message);
        }
    }

    async eliminar(id: string){
        try {
            const usuario = await this.Repo.delete(id);
            if (!usuario) throw new Error("Usuario no encontrado");
            return usuario;
        } catch (error: any) {
            throw new Error("Error: " + error.message);
        }
    }

    async leer(){
        try {
            const datos = await this.Repo.find();
            return datos;
        } catch (error: any) {
            throw new Error("Error: " + error.message);
        }
    }

}

const userService= new UserService(userRepository);

export default userService;