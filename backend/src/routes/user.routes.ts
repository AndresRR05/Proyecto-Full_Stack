import express from 'express';
import { userController } from '../controller/user.controller';

const userRouter = express.Router();

userRouter.post('/registrarse', userController.register.bind(userController));
userRouter.post('/ingresar', userController.login.bind(userController));
userRouter.patch('/', userController.update.bind(userController));
userRouter.delete('/', userController.delete.bind(userController));
userRouter.get('/', userController.leer.bind(userController));

export default userRouter;