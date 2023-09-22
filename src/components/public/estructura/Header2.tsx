import { Link } from 'react-router-dom'
import { logo } from '../../shared/Images'
import { IoCartOutline, IoMailOpenOutline } from 'react-icons/io5'
export const Header2 = (): JSX.Element => {
  return (
    <header className="bg-main h-16 md:h-20 fixed top-0 right-0 left-0">
      <div className="w-full h-full flex justify-between px-4 md:px-10">
        <div className="h-full py-2">
          <Link to="/">
            <img
              src={logo}
              alt="Tunky Perú"
              className="w-full h-full object-contain"
            />
          </Link>
        </div>
        <div className="h-full flex flex-row gap-4 items-center justify-center">
          <Link
            to="#"
            className="bg-transparent border-2 border-white px-4 py-2  rounded-3xl text-white font-bold hidden md:flex items-center justify-center gap-2"
          >
            <s className="bg-transparent border-2 border-white w-8 h-8 rounded-full text-white  flex items-center justify-center">
              S
            </s>
            Punto de inicio
          </Link>
          <Link
            to="#"
            className="bg-transparent border-2 border-white px-4 py-2  rounded-3xl text-white font-bold hidden md:flex items-center justify-center gap-2"
          >
            <s className="bg-transparent border-2 border-white w-8 h-8 rounded-full text-white  flex items-center justify-center">
              F
            </s>
            Punto de Final
          </Link>
          <Link
            to="#"
            className="bg-white border-2 border-main px-4 py-3  rounded-3xl text-main font-bold hidden md:flex items-center justify-center gap-2"
          >
            <IoMailOpenOutline className="text-main text-2xl" />
            Enviar
          </Link>
          <Link to="carrito" className="h-fit w-fit">
            <IoCartOutline className="text-main bg-white w-12 p-2 h-12 rounded-full" />
          </Link>
        </div>
      </div>
    </header>
  )
}
