import { ToDoInterface } from "../models/todo.model";

export interface ToDoDTO extends ToDoInterface{
    title: string;
    description: string;
    userId: string;
    status?: "Pendiente" | "En Proceso" | "Finalizado" | null;
    endDate: string;
}

export interface ToDoUpdateDTO {
    title?: string;
    description?: string;
    userId?: string;
    status?: "Pendiente" | "En Proceso" | "Finalizado" | null;
    endDate?: string;
    _id: string;
}

