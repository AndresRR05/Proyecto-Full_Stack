"use strict";
// Internet manda archivos JSON y URLS todo siempre en texto plano
// Internet recibe archivo JSON y texto plano
// El servidor recibe Typescript o JavaScript
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = exports.UserController = void 0;
const user_service_1 = __importDefault(require("../service/user.service"));
class UserController {
    constructor(userService) {
        this.Service = userService;
    }
    async login(req, res) {
        const { email, password } = req.body;
        if (!email || !password)
            return res.status(400).json({ message: "Faltan datos" });
        try {
            const respuesta = await this.Service.iniciarSesion({ email, password });
            return res.json({ token: respuesta });
        }
        catch (error) {
            if (error.message && error.message == "Usuario no encontrado")
                return res.status(404).json({ message: error.message });
            if (error.message && error.message == "Credenciales incorrectas")
                return res.status(401).json({ message: error.message });
            console.error(error);
            return res.status(500).json({ message: "Error interno del servidor" });
        }
    }
    async register(req, res) {
        const { name, email, password } = req.body;
        if (!name || !email || !password)
            return res.status(400).json({ message: "Faltan datos" });
        try {
            const respuesta = await this.Service.registrarse({ name, email, password });
            return res.json({ token: respuesta });
        }
        catch (error) {
            if (error.message && error.message == "El usuario ya existe")
                return res.status(409).json({ message: error.message });
            console.error(error);
            return res.status(500).json({ message: "Error interno del servidor", error: error.message });
        }
    }
    async update(req, res) {
        const _id = req.body;
        if (!_id)
            return res.status(400).json({ message: "Faltan datos" });
        try {
            const respuesta = await this.Service.actualizar(_id);
            return res.json({ token: respuesta });
        }
        catch (error) {
            if (error.message && error.message == "Usuario no encontrado")
                return res.status(404).json({ message: error.message });
            console.error(error);
            return res.status(500).json({ message: "Error interno del servidor" });
        }
    }
    async delete(req, res) {
        const id = req.body._id;
        if (!id)
            return res.status(400).json({ message: "Faltan datos" });
        try {
            const respuesta = await this.Service.eliminar(id);
            return res.json({ token: respuesta });
        }
        catch (error) {
            if (error.message && error.message == "Usuario no encontrado")
                return res.status(404).json({ message: error.message });
            console.error(error);
            return res.status(500).json({ message: "Error interno del servidor" });
        }
    }
    async leer(req, res) {
        try {
            const listaUsuarios = await this.Service.leer();
            return res.json(listaUsuarios);
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: error.message });
        }
    }
}
exports.UserController = UserController;
exports.userController = new UserController(user_service_1.default);
//# sourceMappingURL=user.controller.js.map