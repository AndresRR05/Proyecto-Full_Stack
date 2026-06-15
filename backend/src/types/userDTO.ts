import { UserInterface } from "../models/user.model"

export interface UserDTO extends UserInterface{
    name:string,
    email:string,
    password?:string,
}

export interface UserUpdateDTO{
    name?:string,
    email?:string,
    password?:string,
    _id:string
}

export interface LoginDTO{
    email: string,
    password: string
}