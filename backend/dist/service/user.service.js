"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_repository_1 = __importDefault(require("../repositories/user.repository"));
class UserService {
    constructor(UserR) {
        this.Repo = UserR;
    }
    async registrarse(newUser) {
        try {
            return await this.Repo.create(newUser);
        }
        catch (error) {
            console.log(error);
            throw new Error(error.message || "Error interno, intenta de nuevo mas tarde");
        }
    }
    async iniciarSesion(user) {
        try {
            const usuarioGuardado = await this.Repo.findByEmail(user.email);
            if (!usuarioGuardado) {
                throw new Error("Usuario no encontrado");
            }
            if (usuarioGuardado.password != user.password) {
                throw new Error("Credenciales incorrectas");
            }
            return btoa(String(usuarioGuardado._id));
        }
        catch (error) {
            console.error(error);
            throw new Error(error.message || "Error interno del servidor");
        }
    }
    async actualizar(datos) {
        try {
            const usuario = await this.Repo.update(datos);
            if (usuario)
                return usuario;
            else
                throw new Error("Usuario no encontrado");
        }
        catch (error) {
            throw new Error("Error: " + error.message);
        }
    }
    async eliminar(id) {
        try {
            const usuario = await this.Repo.delete(id);
            if (!usuario)
                throw new Error("Usuario no encontrado");
            return usuario;
        }
        catch (error) {
            throw new Error("Error: " + error.message);
        }
    }
    async leer() {
        try {
            const datos = await this.Repo.find();
            return datos;
        }
        catch (error) {
            throw new Error("Error: " + error.message);
        }
    }
}
exports.UserService = UserService;
const userService = new UserService(user_repository_1.default);
exports.default = userService;
//# sourceMappingURL=user.service.js.map