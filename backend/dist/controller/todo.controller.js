"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = exports.ToDoController = void 0;
const ToDo_service_1 = require("../service/ToDo.service");
const BadRequesteError_1 = require("../utils/errors/BadRequesteError");
class ToDoController {
    constructor(service) {
        this.todoService = service;
    }
    async actualizarTarea(req, res) {
        const datos = req.body;
        try {
            const respuesta = await this.todoService.actualizarDatosGenerales(datos);
            res.json(respuesta);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: "Ocurrio un error, intente nuevamente" });
        }
    }
    async actualizarEstado(req, res) {
        const { id } = req.params;
        const { status } = req.body;
        try {
            const respuesta = await this.todoService.actualizarEstado(id, status);
            res.json(respuesta);
        }
        catch (error) {
            if (typeof error == typeof BadRequesteError_1.BadRequestError) {
                res.status(error.statusCode).json({ message: error.message });
            }
            else {
                res.status(500).json({ message: "Ocurrio un error, intente nuevamente" });
            }
        }
    }
    async crear(req, res) {
        const { userId, title, description, endDate } = req.body;
        const resultado = await this.todoService.crearTarea({ userId, title, description, endDate });
        res.json(resultado);
    }
    async eliminar(req, res) {
        const { id } = req.params;
        const resultado = await this.todoService.eliminar(id);
        res.json(resultado);
    }
    async leer(req, res) {
        const { userId } = req.params;
        const resultado = await this.todoService.leer(userId);
        res.json(resultado);
    }
}
exports.ToDoController = ToDoController;
exports.controller = new ToDoController(ToDo_service_1.service);
//# sourceMappingURL=todo.controller.js.map