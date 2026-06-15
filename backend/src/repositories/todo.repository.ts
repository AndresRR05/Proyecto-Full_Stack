import { Model } from 'mongoose';
import { ToDoInterface, ToDoModel } from '../models/todo.model';
import { ToDoDTO, ToDoUpdateDTO } from '../types/ToDoDTO';

export class ToDoRepository {
    ToDo: Model<ToDoInterface>;
    constructor(model: Model<ToDoInterface>) {
        this.ToDo = model;
    }

    async create(nuevaTarea: ToDoDTO) {
        return await this.ToDo.insertOne(nuevaTarea);
    }
    async read(userId: string) {
        return await this.ToDo.find({userId});
    }
    async update(datosActualizar: ToDoUpdateDTO) {
        return await this.ToDo.findByIdAndUpdate(datosActualizar._id, datosActualizar);
    }
    async delete(_id: string) {
        return await this.ToDo. findOneAndDelete({_id});
    }
}

export const toDoRepository = new ToDoRepository(ToDoModel);