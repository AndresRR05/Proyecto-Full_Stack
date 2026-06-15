import express from 'express';
import userRouter from './routes/user.routes';
import { connectDB } from './utils/db.config';
import todoRouter from './routes/todo.routes';
import { authMiddleware } from './middlewares/auth.middleware';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/users', userRouter);
app.use('/tasks', authMiddleware, todoRouter)

function initServer(){
    app.listen(3000, () => console.log("Servidor corriendo en: http://localhost:3000/" + "\nhttp://localhost:3000/users"));
}

connectDB(initServer);