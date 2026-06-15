import { useState } from "react"
import { iniciarSesion, registrarse } from "../actions/FormAction"
const Form = () => {

    const [esRegistro, setEsRegistro] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")


    const cambiarEstado = () => {
        setEsRegistro(!esRegistro)
    }

    const manejarFormulario = (evt) => {
        evt.preventDefault()
        if (esRegistro){
            //TODO: Operacion de registrarse
            registrarse(name, email, password)
        }else{
            //TODO: Operacion de iniciar sesion
            iniciarSesion(email, password)
        }
    }

  return (
      <form className="flex flex-col " onSubmit={manejarFormulario}>
          <h2 className="text-2xl font-semibold text-amber-600 text-center mb-2 font-sans">
            {esRegistro? "REGISTRARSE": "INGRESAR"}
            </h2>
            {esRegistro && (
              <>
                <label className="text-lime-600" htmlFor="name">Nombre</label>
                <input input onChange={(e)=> setName(e.target.value)}
                className="shadow-lg border-zinc-600 rounded py-2 px-1 my-1 bg-neutral-600 text-white focus:outline-hidden focus:bg-neutral-500 focus:shadow-xl" type="text" name="name" id="name" />
              </>
            )}
            
        <label className="text-lime-600 " htmlFor="user">Correo</label>
        <input input onChange={(e)=> setEmail(e.target.value)}
        className="shadow-lg border-zinc-600 rounded py-2 px-1 my-1 bg-neutral-600 text-white focus:outline-hidden focus:bg-neutral-500 focus:shadow-xl" type="text" name="user" id="user"  />

        <label className="text-lime-600 " htmlFor="password">Contraseña</label>
        <input input onChange={(e)=> setPassword(e.target.value)}
        className="shadow-lg border-zinc-600 rounded py-2 px-1 my-1 bg-neutral-600 text-white focus:outline-hidden focus:bg-neutral-500 focus:shadow-xl"  type="password" name="password" id="password"  />

          <div className="flex justify-end"> 
            <button className="bg-amber-600 text-white px-[30px] py-2 my-1 mb-3 rounded lg cursor-pointer 
            font-semibold shadow-xl hover:bg-amber-700">
              {esRegistro? "Registrate": "Ingresar"}</button>
            </div>
          <p className=" text-sm text-lime-600">
            {esRegistro? "Ya": "Aun no"} tienes una cuenta? 
            <button className="cursor-pointer text-amber-600 font-semibold hover:underline ml-2"
            onClick={cambiarEstado} type="button"
            >
              {
                esRegistro? "Inicia Sesion ": "Registrarse "
              }
              Aqui
              </button></p>
        </form>
  )
}

export default Form
