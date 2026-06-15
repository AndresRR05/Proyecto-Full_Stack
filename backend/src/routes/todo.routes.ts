import { Router } from "express";
import { controller } from "../controller/todo.controller";

const todoRouter = Router();

todoRouter.post("/", controller.crear.bind(controller))
todoRouter.get("/:userId", controller.leer.bind(controller))
todoRouter.patch("/", controller.actualizarTarea.bind(controller))
todoRouter.put("/:id", controller.actualizarEstado.bind(controller))
todoRouter.delete("/:id", controller.eliminar.bind(controller))

export default todoRouter;