import { BsFillTrashFill, BsXLg } from 'react-icons/bs'
import { plaza } from '../shared/Images'
import { useEffect } from 'react'

export const Carrito = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <section className="cart">
        <div className="cart__main">
          <div className="cart_main_items">
            <div className="cart_mainitems_content">
              <div className="cart_mainitemscontent_title">
                <h2>
                  Carrito <span>(1 producto)</span>
                </h2>
                <button>
                  <BsXLg />
                  Limpiar
                </button>
              </div>
              <div className="cart_mainitemscontent_info">
                <table>
                  <thead>
                    <tr>
                      <th className="text-xl">Servicio</th>
                      <th>Cantidad</th>
                      <th>Precio</th>
                      <th>Eliminar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="cartProd">
                          <div className="cartProd__img">
                            <img
                              src={plaza}
                              alt="Tunky Perú"
                              className="w-40 h-full object-contain rounded-xl"
                            />
                          </div>

                          <div className="cartProd__title">
                            <h6 className="text-lg font-medium">Ruta 1</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <h6 className="text-lg font-medium">1</h6>
                      </td>
                      <td>
                        <p className="text-lg font-medium">S/. 1499</p>
                      </td>
                      <td>
                        <button>
                          <BsFillTrashFill />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="cart__main__price flex flex-col">
            <form action="" className="">
              <div className="flex flex-col mb-6 gap-4">
                <div className="inputs_pago ">
                  <input
                    type="text"
                    placeholder="Ingresa tus nombres"
                    className=""
                    name="nombres"
                  />
                </div>
              </div>

              <div className="flex flex-col mb-6 gap-4">
                <div className="inputs_pago ">
                  <input
                    type="text"
                    placeholder="Ingresa tus apellidos"
                    className=""
                    name="apellidos"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6 gap-4">
                <div className="inputs_pago relative">
                  <input
                    type="number"
                    placeholder="RUC o DNI"
                    className=""
                    name="ruc"
                  />
                </div>
              </div>

              <div className="flex flex-col mb-6 gap-4">
                <div className="inputs_pago relative">
                  <input
                    type="email"
                    placeholder="Ingresa tu correo"
                    className=""
                    name="email"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6 gap-4">
                <div className="inputs_pago relative">
                  <input
                    type="number"
                    placeholder="Numero de celular/telefono"
                    className=""
                    name="celular"
                  />
                </div>
              </div>
              <p>Total a Pagar: S/1499</p>

              <button type="submit">Continuar con el pago</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
