import mongoose from "mongoose";

const ToDoSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    userId: {type: mongoose.Types.ObjectId, ref: "Users", required: true},
    status: {type: String, default: "Pendiente", enum: ["Pendiente", "En Proceso", "Finalizado"]},
    endDate: {type: String, required: true}
});

export type ToDoInterface = mongoose.SchemaType<typeof ToDoSchema>;

export const ToDoModel = mongoose.model<ToDoInterface>("ToDo", ToDoSchema);