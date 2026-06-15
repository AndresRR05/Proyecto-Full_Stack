import { toDoRepository, ToDoRepository } from "../repositories/todo.repository";
import { ToDoDTO, ToDoUpdateDTO } from "../types/ToDoDTO";
import { BadRequestError } from "../utils/errors/BadRequesteError";
import { NotFoundError } from "../utils/errors/NotFoundError";

export class ToDoService {
    Repo: ToDoRepository;
    status: "Pendiente" | "En Proceso" | "Finalizado" | null = null;
    constructor(toDoRepository : ToDoRepository) {
        this.Repo = toDoRepository;
    }

    async crearTarea(nuevaTarea: ToDoDTO) {
        return await this.Repo.create(nuevaTarea)
    }

    async actualizarDatosGenerales(cambios: ToDoUpdateDTO) {
        return await this.Repo.update(cambios)
    }

    async actualizarEstado(id: string, status: string) {
        // if (estado == "Pendiente" || estado == "En Proceso" || estado == "Finalizado") {
        // }
        if (typeof status != typeof this.status) {
            throw new BadRequestError("Formato de estado incorrecto");
        }

        if (status == "Pendiente") this.status = "En Proceso";
        else if (status == "En Proceso") this.status = "Finalizado";
        else this.status = "Pendiente";

        const tareaActualizado = await this.Repo.update({_id:id, status:this.status});
        if (!tareaActualizado)
            throw new NotFoundError("Tarea no encontrada")
        return {message: "Actualizado correctamente"}
    }

    async eliminar(id: string) {
        const tarea = await this.Repo.delete(id);
        if (!tarea) 
            throw new NotFoundError("Tarea no encontrada");
        return {Message: "Tarea eliminada con éxito"};
    }

    async leer(userId: string) {
        const respuesta = await this.Repo.read(userId);
        if (respuesta.length == 0) 
            throw new NotFoundError("Datos de tareas no encontrados");
        return respuesta;
    }
}

export const service = new ToDoService(toDoRepository);