import toast from "react-hot-toast"
import { URL_USERS } from "../utils/urls";

export const iniciarSesion = async (email, password) => {
    try {
        const respuesta = await fetch(URL_USERS + "/ingresar", {
            method: "POST",
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify({ 
                email, 
                password
            })
        });
        if (respuesta.status === 200){
            toast.success("Bienvenido de nuevo PUTO")
        }else{
            const datosJson = await respuesta.json();
            toast.error(datosJson.message || "Correo o contraseña incorrectos, intenta de nuevo 😵")
        }
    } catch (error) {
        toast.error("Ocurrió un error al iniciar sesión, intenta de nuevo más tarde :(")
    }
}

export const registrarse = async (name, email, password) => {
    try {
        const respuesta = await fetch(URL_USERS + "/registrarse", {
            method: "POST",
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify({ 
                name, 
                email, 
                password
            })
        });
        if (respuesta.status === 200){
            toast.success("Usuario registrado con éxito")
        }else{
            const datosJson = await respuesta.json();
            // console.log(datosJson)
            toast.error(datosJson.message || "Este correo ya fue registrado")
           
        }
    } catch (error) {
        toast.error("Ocurrio un error al registrarse, intenta de nuevo mas tarde :(")
    }
}