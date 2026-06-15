"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controller/user.controller");
const userRouter = express_1.default.Router();
userRouter.post('/registrarse', user_controller_1.userController.register.bind(user_controller_1.userController));
userRouter.post('/ingresar', user_controller_1.userController.login.bind(user_controller_1.userController));
userRouter.patch('/', user_controller_1.userController.update.bind(user_controller_1.userController));
userRouter.delete('/', user_controller_1.userController.delete.bind(user_controller_1.userController));
userRouter.get('/', user_controller_1.userController.leer.bind(user_controller_1.userController));
exports.default = userRouter;
//# sourceMappingURL=user.routes.js.map