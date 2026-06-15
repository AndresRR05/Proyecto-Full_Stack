"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.service = exports.ToDoService = void 0;
const todo_repository_1 = require("../repositories/todo.repository");
const BadRequesteError_1 = require("../utils/errors/BadRequesteError");
const NotFoundError_1 = require("../utils/errors/NotFoundError");
class ToDoService {
    constructor(toDoRepository) {
        this.status = null;
        this.Repo = toDoRepository;
    }
    async crearTarea(nuevaTarea) {
        return await this.Repo.create(nuevaTarea);
    }
    async actualizarDatosGenerales(cambios) {
        return await this.Repo.update(cambios);
    }
    async actualizarEstado(id, status) {
        // if (estado == "Pendiente" || estado == "En Proceso" || estado == "Finalizado") {
        // }
        if (typeof status != typeof this.status) {
            throw new BadRequesteError_1.BadRequestError("Formato de estado incorrecto");
        }
        if (status == "Pendiente")
            this.status = "En Proceso";
        else if (status == "En Proceso")
            this.status = "Finalizado";
        else
            this.status = "Pendiente";
        const tareaActualizado = await this.Repo.update({ _id: id, status: this.status });
        if (!tareaActualizado)
            throw new NotFoundError_1.NotFoundError("Tarea no encontrada");
        return { message: "Actualizado correctamente" };
    }
    async eliminar(id) {
        const tarea = await this.Repo.delete(id);
        if (!tarea)
            throw new NotFoundError_1.NotFoundError("Tarea no encontrada");
        return { Message: "Tarea eliminada con éxito" };
    }
    async leer(userId) {
        const respuesta = await this.Repo.read(userId);
        if (respuesta.length == 0)
            throw new NotFoundError_1.NotFoundError("Datos de tareas no encontrados");
        return respuesta;
    }
}
exports.ToDoService = ToDoService;
exports.service = new ToDoService(todo_repository_1.toDoRepository);
//# sourceMappingURL=ToDo.service.js.map