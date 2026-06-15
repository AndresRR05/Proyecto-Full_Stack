import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, unique:true, required: true},
    password: {type:String, requiered:true}
});

export type UserInterface = mongoose.SchemaType<typeof UserSchema>;

const UserModel = mongoose.model<UserInterface>("Users", UserSchema);

export default UserModel;