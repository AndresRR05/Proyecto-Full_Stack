"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_controller_1 = require("../controller/todo.controller");
const todoRouter = (0, express_1.Router)();
todoRouter.post("/", todo_controller_1.controller.crear.bind(todo_controller_1.controller));
todoRouter.get("/:userId", todo_controller_1.controller.leer.bind(todo_controller_1.controller));
todoRouter.patch("/", todo_controller_1.controller.actualizarTarea.bind(todo_controller_1.controller));
todoRouter.put("/:id", todo_controller_1.controller.actualizarEstado.bind(todo_controller_1.controller));
todoRouter.delete("/:id", todo_controller_1.controller.eliminar.bind(todo_controller_1.controller));
exports.default = todoRouter;
//# sourceMappingURL=todo.routes.js.map