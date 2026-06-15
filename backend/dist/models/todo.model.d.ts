import mongoose from "mongoose";
declare const ToDoSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    description: string;
    title: string;
    userId: mongoose.Types.ObjectId;
    status: "Pendiente" | "En Proceso" | "Finalizado";
    endDate: string;
}, mongoose.Document<unknown, {}, {
    description: string;
    title: string;
    userId: mongoose.Types.ObjectId;
    status: "Pendiente" | "En Proceso" | "Finalizado";
    endDate: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    description: string;
    title: string;
    userId: mongoose.Types.ObjectId;
    status: "Pendiente" | "En Proceso" | "Finalizado";
    endDate: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    description: string;
    title: string;
    userId: mongoose.Types.ObjectId;
    status: "Pendiente" | "En Proceso" | "Finalizado";
    endDate: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export type ToDoInterface = mongoose.SchemaType<typeof ToDoSchema>;
export declare const ToDoModel: mongoose.Model<ToDoInterface, {}, {}, {}, mongoose.Document<unknown, {}, ToDoInterface, {}, mongoose.DefaultSchemaOptions> & ToDoInterface & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, ToDoInterface>;
export {};
//# sourceMappingURL=todo.model.d.ts.map