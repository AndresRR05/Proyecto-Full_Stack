import mongoose from "mongoose";
declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    email: string;
    password?: string | null;
}, mongoose.Document<unknown, {}, {
    name: string;
    email: string;
    password?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    name: string;
    email: string;
    password?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    name: string;
    email: string;
    password?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export type UserInterface = mongoose.SchemaType<typeof UserSchema>;
declare const UserModel: mongoose.Model<UserInterface, {}, {}, {}, mongoose.Document<unknown, {}, UserInterface, {}, mongoose.DefaultSchemaOptions> & UserInterface & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, UserInterface>;
export default UserModel;
//# sourceMappingURL=user.model.d.ts.map