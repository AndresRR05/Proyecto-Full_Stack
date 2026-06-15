import {SquareCheckBig} from 'lucide-react'

const Header = () => {
  return (
    <header className=" flex items-center p-4 text-lime-600 shadow-lg gap-3 h-1/12">  
        {/* icono */ }
        <SquareCheckBig size={44} strokeWidth={1.75} className="text-amber-600"/>
        <h1 className="text-xl font-bold">
            App de Tareas
        </h1>
    </header>
  )
}

export default Header