"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDoRepository = exports.ToDoRepository = void 0;
const todo_model_1 = require("../models/todo.model");
class ToDoRepository {
    constructor(model) {
        this.ToDo = model;
    }
    async create(nuevaTarea) {
        return await this.ToDo.insertOne(nuevaTarea);
    }
    async read(userId) {
        return await this.ToDo.find({ userId });
    }
    async update(datosActualizar) {
        return await this.ToDo.findByIdAndUpdate(datosActualizar._id, datosActualizar);
    }
    async delete(_id) {
        return await this.ToDo.findOneAndDelete({ _id });
    }
}
exports.ToDoRepository = ToDoRepository;
exports.toDoRepository = new ToDoRepository(todo_model_1.ToDoModel);
//# sourceMappingURL=todo.repository.js.map