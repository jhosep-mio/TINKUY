import { Link } from 'react-router-dom'
import { logo } from '../../shared/Images'
import { IoCartOutline } from 'react-icons/io5'

export const Header = (): JSX.Element => {
  return (
    <header className="bg-main h-16 md:h-20 fixed top-0 right-0 left-0">
      <div className="w-full h-full flex justify-between px-4 md:px-10">
        <div className="h-full py-2">
          <Link to='/'>
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
            className="bg-white px-10 py-3 rounded-3xl text-main font-bold hidden md:block"
          >
            Diseña tu experiencia
          </Link>
          <Link to="carrito" className="h-fit w-fit relative">
            <span className="absolute top-[-5px] right-[-5px] bg-red-500 w-6 h-6 rounded-full flex items-center justify-center text-white">
              1
            </span>
            <IoCartOutline className="text-main bg-white w-12 p-2 h-12 rounded-full" />
          </Link>
        </div>
      </div>
    </header>
  )
}
