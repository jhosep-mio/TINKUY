import { GoogleMaps } from '../shared/MAPA/GoogleMaps'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { madrid, plaza } from '../shared/Images'
import { IoCaretDownCircle, IoCaretUpCircle } from 'react-icons/io5'
import { motion } from 'framer-motion'
import { BsClock, BsX } from 'react-icons/bs'
import { Header2 } from './estructura/Header2'
export const Rutas = (): JSX.Element => {
  useEffect(() => {
    const divCambio = document.getElementById('seccion_cambio')
    const miSpan = document.querySelector('.swiper-button-next')
    const miSpan2 = document.querySelector('.swiper-button-prev')
    if (divCambio && miSpan && miSpan2) {
      divCambio.appendChild(miSpan)
      divCambio.appendChild(miSpan2)
    }
  }, [])
  const [open, setopen] = useState(false)
  return (
    <>
      <Header2 />
      <section className="ruta section_rutas overflow-hidden">
        <div className="main section_rutas">
          <div className="item">
            <div className="title">
              <span>Madrid en familia</span>
            </div>

            <div className="contenedor">
              <div className="days">
                <span>Día 1</span>
                <span>Día 2</span>
              </div>
              <div className="days">
                <p>Sábado</p>
                <p>Domingo</p>
              </div>
            </div>

            <div className="contenedor2">
              <div className="cuadricula">
                <div className="item2">
                  <span>9 AM</span>
                </div>
                <div className="item2">
                  <span>10 AM</span>
                </div>
                <div className="item2">
                  <span>11 AM</span>
                </div>
                <div className="item2">
                  <span>12 pM</span>
                </div>
                <div className="item2">
                  <span>1 PM</span>
                </div>
                <div className="item2">
                  <span>2 pM</span>
                </div>
                <div className="item2">
                  <span>3 pM</span>
                </div>
                <div className="item2">
                  <span>4 pM</span>
                </div>
              </div>

              <div className="itinerario">
                <div className="item3">
                  <div className="img">
                    <img
                      src={plaza}
                      alt="Tunky Perú"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="title2">
                    <p>Plaza Mayor</p>
                  </div>

                  <button className="close">
                    <BsX />
                  </button>

                  <div className="time">
                    <BsClock /> 30m.
                  </div>
                </div>
                <div className="item3">
                  <div className="img">
                    <img
                      src={plaza}
                      alt="Tunky Perú"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="title2">
                    <p>Plaza Mayor</p>
                  </div>

                  <button className="close">
                    <BsX />
                  </button>

                  <div className="time">
                    <BsClock /> 30m.
                  </div>
                </div>
                <div className="item3">
                  <div className="img">
                    <img
                      src={plaza}
                      alt="Tunky Perú"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="title2">
                    <p>Plaza Mayor</p>
                  </div>

                  <button className="close">
                    <BsX />
                  </button>

                  <div className="time">
                    <BsClock /> 30m.
                  </div>
                </div>
                <div className="item3">
                  <div className="img">
                    <img
                      src={plaza}
                      alt="Tunky Perú"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="title2">
                    <p>Plaza Mayor</p>
                  </div>

                  <button className="close">
                    <BsX />
                  </button>

                  <div className="time">
                    <BsClock /> 30m.
                  </div>
                </div>
                <div className="item3">
                  <div className="img">
                    <img
                      src={plaza}
                      alt="Tunky Perú"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="title2">
                    <p>Plaza Mayor</p>
                  </div>

                  <button className="close">
                    <BsX />
                  </button>

                  <div className="time">
                    <BsClock /> 30m.
                  </div>
                </div>
                <div className="item3">
                  <div className="img">
                    <img
                      src={plaza}
                      alt="Tunky Perú"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="title2">
                    <p>Plaza Mayor</p>
                  </div>

                  <button className="close">
                    <BsX />
                  </button>

                  <div className="time">
                    <BsClock /> 30m.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="item flex flex-col relative">
            <div className="w-full h-auto">
              <GoogleMaps />
            </div>
            <motion.div
              initial={{ height: '200px' }}
              animate={{ opacity: 1, bottom: open ? 0 : -160 }}
              exit={{ bottom: '-160px' }}
              className={
                'w-full h-200 bg-main absolute bottom-0 right-0 left-0'
              }
            >
              <span className="absolute right-28 z-10 top-[-25px] bg-main border-2 w-14 h-14  rounded-full flex items-center justify-center animate-pulse cursor-pointer">
                {open
                  ? (
                  <IoCaretDownCircle
                    className="text-white text-7xl"
                    onClick={() => {
                      setopen(!open)
                    }}
                  />
                    )
                  : (
                  <IoCaretUpCircle
                    className="text-white text-7xl"
                    onClick={() => {
                      setopen(!open)
                    }}
                  />
                    )}
              </span>
              <motion.section
                initial={{ opacity: 1 }}
                animate={{ opacity: open ? 1 : 0 }}
                exit={{ opacity: 0 }}
                className="w-full h-full bg-main py-5 px-10 max-w-[1300px] mx-auto relative"
                id="seccion_cambio"
              >
                <div className="w-full h-full px-[17px] overflow-hidden">
                  <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    className="swiper_home2 h-full py-4"
                    navigation={true}
                    modules={[Navigation]}
                    breakpoints={{
                      0: {
                        slidesPerView: 2,
                        spaceBetween: 10
                      },
                      768: {
                        slidesPerView: 4,
                        spaceBetween: 40
                      },
                      1024: {
                        slidesPerView: 5,
                        spaceBetween: 20
                      }
                    }}
                  >
                    <SwiperSlide className="bg-white rounded-xl group overflow-hidden contenedor_viajes">
                      <div className="w-full h-[180px] lg:h-full flex flex-col relative items-center justify-center rounded-xl">
                        <span className="font-extrabold text-sm lg:text-lg text-black absolute top-0 left-0 px-2 lg:px-3 py-0 lg:py-1 m-2 lg:m-2     bg-white border-2 border-black rounded-xl z-20">
                          1 hr.
                        </span>
                        <div className="w-full h-2/3 overflow-hidden">
                          <img
                            src={madrid}
                            alt="Tunky Perú"
                            className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <h2 className="font-extrabold text-black text-sm lg:text-base line-clamp-1  rounded-b-lg h-1/3 flex items-center">
                          Espectaculo de Flamenco
                        </h2>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-white rounded-xl group overflow-hidden contenedor_viajes">
                      <div className="w-full h-[180px] lg:h-full flex flex-col relative items-center justify-center rounded-xl">
                        <span className="font-extrabold text-sm lg:text-lg text-black absolute top-0 left-0 px-2 lg:px-3 py-0 lg:py-1 m-2 lg:m-2     bg-white border-2 border-black rounded-xl z-20">
                          1 hr.
                        </span>
                        <div className="w-full h-2/3 overflow-hidden">
                          <img
                            src={madrid}
                            alt="Tunky Perú"
                            className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <h2 className="font-extrabold text-black text-sm lg:text-base line-clamp-1  rounded-b-lg h-1/3 flex items-center">
                          Espectaculo de Flamenco
                        </h2>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-white rounded-xl group overflow-hidden contenedor_viajes">
                      <div className="w-full h-[180px] lg:h-full flex flex-col relative items-center justify-center rounded-xl">
                        <span className="font-extrabold text-sm lg:text-lg text-black absolute top-0 left-0 px-2 lg:px-3 py-0 lg:py-1 m-2 lg:m-2     bg-white border-2 border-black rounded-xl z-20">
                          1 hr.
                        </span>
                        <div className="w-full h-2/3 overflow-hidden">
                          <img
                            src={madrid}
                            alt="Tunky Perú"
                            className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <h2 className="font-extrabold text-black text-sm lg:text-base line-clamp-1  rounded-b-lg h-1/3 flex items-center">
                          Espectaculo de Flamenco
                        </h2>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-white rounded-xl group overflow-hidden contenedor_viajes">
                      <div className="w-full h-[180px] lg:h-full flex flex-col relative items-center justify-center rounded-xl">
                        <span className="font-extrabold text-sm lg:text-lg text-black absolute top-0 left-0 px-2 lg:px-3 py-0 lg:py-1 m-2 lg:m-2     bg-white border-2 border-black rounded-xl z-20">
                          1 hr.
                        </span>
                        <div className="w-full h-2/3 overflow-hidden">
                          <img
                            src={madrid}
                            alt="Tunky Perú"
                            className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <h2 className="font-extrabold text-black text-sm lg:text-base line-clamp-1  rounded-b-lg h-1/3 flex items-center">
                          Espectaculo de Flamenco
                        </h2>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-white rounded-xl group overflow-hidden contenedor_viajes">
                      <div className="w-full h-[180px] lg:h-full flex flex-col relative items-center justify-center rounded-xl">
                        <span className="font-extrabold text-sm lg:text-lg text-black absolute top-0 left-0 px-2 lg:px-3 py-0 lg:py-1 m-2 lg:m-2     bg-white border-2 border-black rounded-xl z-20">
                          1 hr.
                        </span>
                        <div className="w-full h-2/3 overflow-hidden">
                          <img
                            src={madrid}
                            alt="Tunky Perú"
                            className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <h2 className="font-extrabold text-black text-sm lg:text-base line-clamp-1  rounded-b-lg h-1/3 flex items-center">
                          Espectaculo de Flamenco
                        </h2>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-white rounded-xl group overflow-hidden contenedor_viajes">
                      <div className="w-full h-[180px] lg:h-full flex flex-col relative items-center justify-center rounded-xl">
                        <span className="font-extrabold text-sm lg:text-lg text-black absolute top-0 left-0 px-2 lg:px-3 py-0 lg:py-1 m-2 lg:m-2     bg-white border-2 border-black rounded-xl z-20">
                          1 hr.
                        </span>
                        <div className="w-full h-2/3 overflow-hidden">
                          <img
                            src={madrid}
                            alt="Tunky Perú"
                            className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <h2 className="font-extrabold text-black text-sm lg:text-base line-clamp-1  rounded-b-lg h-1/3 flex items-center">
                          Espectaculo de Flamenco
                        </h2>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-white rounded-xl group overflow-hidden contenedor_viajes">
                      <div className="w-full h-[180px] lg:h-full flex flex-col relative items-center justify-center rounded-xl">
                        <span className="font-extrabold text-sm lg:text-lg text-black absolute top-0 left-0 px-2 lg:px-3 py-0 lg:py-1 m-2 lg:m-2     bg-white border-2 border-black rounded-xl z-20">
                          1 hr.
                        </span>
                        <div className="w-full h-2/3 overflow-hidden">
                          <img
                            src={madrid}
                            alt="Tunky Perú"
                            className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <h2 className="font-extrabold text-black text-sm lg:text-base line-clamp-1  rounded-b-lg h-1/3 flex items-center">
                          Espectaculo de Flamenco
                        </h2>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-white rounded-xl group overflow-hidden contenedor_viajes">
                      <div className="w-full h-[180px] lg:h-full flex flex-col relative items-center justify-center rounded-xl">
                        <span className="font-extrabold text-sm lg:text-lg text-black absolute top-0 left-0 px-2 lg:px-3 py-0 lg:py-1 m-2 lg:m-2     bg-white border-2 border-black rounded-xl z-20">
                          1 hr.
                        </span>
                        <div className="w-full h-2/3 overflow-hidden">
                          <img
                            src={madrid}
                            alt="Tunky Perú"
                            className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <h2 className="font-extrabold text-black text-sm lg:text-base line-clamp-1  rounded-b-lg h-1/3 flex items-center">
                          Espectaculo de Flamenco
                        </h2>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </motion.section>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
