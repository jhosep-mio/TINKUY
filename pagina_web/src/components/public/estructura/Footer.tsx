import { Link } from 'react-router-dom'
import { logocolor } from '../../shared/Images'

export const Footer = (): JSX.Element => {
  return (
    <footer className="w-full bg-[#252525]">
      <section className="w-full grid grid-cols-1 md:grid-cols-3 justify-center text-white text-sm md:text-xl gap-4 lg:gap-20 py-4 lg:py-20 px-10 lg:px-48">
        <div>
          <img
            src={logocolor}
            alt="Tunky Perú"
            className="w-full h-full object-contain opacity-100 px-10 md:px-0"
          />
        </div>
        <div>
          <h2 className="font-bold text-xl lg:text-3xl">Links</h2>
          <span className="w-full h-[2px] block bg-main mt-2 mb-4"></span>
          <ul className="">
            <li>
              <Link
                to=""
                className="opacity-80 hover:opacity-100 transition-opacity text-xs lg:text-base"
              >
                Politica de Privacidad
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="opacity-80 hover:opacity-100 transition-opacity text-xs lg:text-base"
              >
                Politica de Cookies
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="opacity-80 hover:opacity-100 transition-opacity text-xs lg:text-base"
              >
                Aviso Legal{' '}
              </Link>
            </li>
            <li>
              <Link
                to="/nosotros"
                className="opacity-80 hover:opacity-100 transition-opacity text-xs lg:text-base"
              >
                Quienes Somos
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-xl lg:text-3xl">Contacto</h2>
          <span className="w-full h-[2px] block bg-main mt-2 mb-4"></span>
          <ul>
            <li>
              <Link
                to=""
                className="opacity-80 hover:opacity-100 transition-opacity text-xs lg:text-base"
              >
                Tinkuy Perú
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="opacity-80 hover:opacity-100 transition-opacity text-xs lg:text-base"
              >
                +51 972 703 701
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="opacity-80 hover:opacity-100 transition-opacity text-xs lg:text-base"
              >
                info@tinkuyperu.com
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="opacity-80 hover:opacity-100 transition-opacity text-xs lg:text-base"
              >
                Formulario de Contacto
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  )
}
