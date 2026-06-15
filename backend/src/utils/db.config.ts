import mongoose from "mongoose";

export function connectDB(callback:() => void){
    mongoose.connect(
        "mongodb://localhost:27017/"
    )
    .then(() => callback())
    .catch(error => console.error(error))
}