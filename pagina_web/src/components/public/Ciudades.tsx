import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
// import required modules
import { Navigation } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { barcelona, madrid, slider1 } from '../shared/Images'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { useState, useEffect } from 'react'

export const Ciudades = (): JSX.Element => {
  const [date, setDate] = useState<Date | Date[] | null>(new Date())
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleDateChange = (value: Date | Date[]) => {
    if (value instanceof Date) {
      // Si el valor es una fecha, establece la fecha
      setDate(value)
    } else {
      // Si el valor es un array de fechas, puedes manejarlo según tus necesidades
      // Por ejemplo, podrías seleccionar la primera fecha en el array
      if (value.length > 0) {
        setDate(value[0])
      }
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* SLIDER */}
      <section className="w-full h-[225px] md:h-[300px] lg:h-[525px] mt-16 md:mt-20 relative">
        <div className="contenedor_img absolute z-[-10] inset-0">
          <img
            src={slider1}
            alt="Tunky Perú"
            className="w-full h-full object-cover "
          />
        </div>
        <div className="w-fit h-full flex items-center justify-center flex-col mx-auto gap-6 lg:gap-16">
          <div>
            <h1 className="text-white text-3xl lg:text-6xl text-center texto_principal font-bold">
              Planifica tu visita a <br /> Madrid
            </h1>
          </div>
          <div className="w-fit lg:w-[450px] h-10 lg:h-20 flex bg-white rounded-lg p-1 justify-center items-center border-4 border-main">
            <Link
              to="#"
              className="text-main font-extrabold text-xl text-center"
            >
              EXPERIENCIAS INTELIGENTES CON <br/>
              <span className="text-black">TINKUY</span>
            </Link>
          </div>
          <div className="">
            <p className="description_text font-bold text-sm lg:text-2xl hidden md:block">
              *Nota. Las imágenes utilizadas pertenecen a sus respectivos
              propietarios y se utilizan con fines informativos o
              promocionales.EsMadrid, Comunidad de Madrid, Tiqets, Civitatis,
              Get your Guide
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#252525] py-2 lg:py-4">
        <h2 className="text-center text-xl lg:text-4xl font-extrabold text-white">
          ¡Experiencias solo para ti!
        </h2>
      </section>

      <section className="w-full py-4 lg:py-4 bg-[#EEEEEE]">
        <div className="w-full h-full max-w-[1450px] px-[17px] mx-auto overflow-hidden">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            className="swiper_home py-2"
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
                slidesPerView: 4,
                spaceBetween: 20
              }
            }}
          >
            <SwiperSlide className="bg-white rounded-xl group overflow-hidden contenedor_viajes">
              <div className="w-full h-[180px] lg:h-[320px] flex flex-col relative items-center justify-center rounded-xl gap-1 lg:gap-3 pb-3 ">
                <span className="font-extrabold text-sm lg:text-xl text-black absolute top-0 left-0 px-2 lg:px-4 py-0 lg:py-1 m-2 lg:m-4 bg-white border-2 border-black rounded-xl z-20">
                  2 dias
                </span>
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={madrid}
                    alt="Tunky Perú"
                    className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform"
                  />
                </div>
                <h2 className="font-extrabold text-black text-sm lg:text-2xl">
                  2 días en Madrid
                </h2>
                <Link
                  to="/rutas"
                  className="bg-main px-2 lg:px-6 py-2 text-[2.8vw] md:text-[1.3vw] lg:text-xl font-extrabold text-white rounded-2xl hover:bg-maindark transition-colors"
                >
                  Usar ruta personalizada
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-xl group overflow-hidden contenedor_viajes">
              <div className="w-full h-[180px] lg:h-[320px] flex flex-col relative items-center justify-center rounded-xl gap-1 lg:gap-3 pb-3 contenedor_viajes">
                <span className="font-extrabold text-sm lg:text-xl text-black absolute top-0 left-0 px-2 lg:px-4 py-0 lg:py-1 m-2 lg:m-4 bg-white border-2 border-black rounded-xl z-20">
                  2 dias
                </span>
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={madrid}
                    alt="Tunky Perú"
                    className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform"
                  />
                </div>
                <h2 className="font-extrabold text-black text-sm lg:text-2xl">
                  2 días en Madrid
                </h2>
                <Link
                  to="/rutas"
                  className="bg-main px-2 lg:px-6 py-2 text-[2.8vw] md:text-[1.3vw] lg:text-xl font-extrabold text-white rounded-2xl hover:bg-maindark transition-colors"
                >
                  Usar ruta personalizada
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-xl group overflow-hidden contenedor_viajes">
              <div className="w-full h-[180px] lg:h-[320px] flex flex-col relative items-center justify-center rounded-xl gap-1 lg:gap-3 pb-3 contenedor_viajes">
                <span className="font-extrabold text-sm lg:text-xl text-black absolute top-0 left-0 px-2 lg:px-4 py-0 lg:py-1 m-2 lg:m-4 bg-white border-2 border-black rounded-xl z-20">
                  2 dias
                </span>
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={madrid}
                    alt="Tunky Perú"
                    className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform"
                  />
                </div>
                <h2 className="font-extrabold text-black text-sm lg:text-2xl">
                  2 días en Madrid
                </h2>
                <Link
                  to="/rutas"
                  className="bg-main px-2 lg:px-6 py-2 text-[2.8vw] md:text-[1.3vw] lg:text-xl font-extrabold text-white rounded-2xl hover:bg-maindark transition-colors"
                >
                  Usar ruta personalizada
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-xl group overflow-hidden contenedor_viajes">
              <div className="w-full h-[180px] lg:h-[320px] flex flex-col relative items-center justify-center rounded-xl gap-1 lg:gap-3 pb-3 contenedor_viajes">
                <span className="font-extrabold text-sm lg:text-xl text-black absolute top-0 left-0 px-2 lg:px-4 py-0 lg:py-1 m-2 lg:m-4 bg-white border-2 border-black rounded-xl z-20">
                  2 dias
                </span>
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={madrid}
                    alt="Tunky Perú"
                    className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform"
                  />
                </div>
                <h2 className="font-extrabold text-black text-sm lg:text-2xl">
                  2 días en Madrid
                </h2>
                <Link
                  to="/rutas"
                  className="bg-main px-2 lg:px-6 py-2 text-[2.8vw] md:text-[1.3vw] lg:text-xl font-extrabold text-white rounded-2xl hover:bg-maindark transition-colors"
                >
                  Usar ruta personalizada
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-xl group overflow-hidden contenedor_viajes">
              <div className="w-full h-[180px] lg:h-[320px] flex flex-col relative items-center justify-center rounded-xl gap-1 lg:gap-3 pb-3 contenedor_viajes">
                <span className="font-extrabold text-sm lg:text-xl text-black absolute top-0 left-0 px-2 lg:px-4 py-0 lg:py-1 m-2 lg:m-4 bg-white border-2 border-black rounded-xl z-20">
                  2 dias
                </span>
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={madrid}
                    alt="Tunky Perú"
                    className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform"
                  />
                </div>
                <h2 className="font-extrabold text-black text-sm lg:text-2xl">
                  2 días en Madrid
                </h2>
                <Link
                  to="/rutas"
                  className="bg-main px-2 lg:px-6 py-2 text-[2.8vw] md:text-[1.3vw] lg:text-xl font-extrabold text-white rounded-2xl hover:bg-maindark transition-colors"
                >
                  Usar ruta personalizada
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-xl group overflow-hidden contenedor_viajes">
              <div className="w-full h-[180px] lg:h-[320px] flex flex-col relative items-center justify-center rounded-xl gap-1 lg:gap-3 pb-3 contenedor_viajes">
                <span className="font-extrabold text-sm lg:text-xl text-black absolute top-0 left-0 px-2 lg:px-4 py-0 lg:py-1 m-2 lg:m-4 bg-white border-2 border-black rounded-xl z-20">
                  2 dias
                </span>
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={madrid}
                    alt="Tunky Perú"
                    className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform"
                  />
                </div>
                <h2 className="font-extrabold text-black text-sm lg:text-2xl">
                  2 días en Madrid
                </h2>
                <Link
                  to="/rutas"
                  className="bg-main px-2 lg:px-6 py-2 text-[2.8vw] md:text-[1.3vw] lg:text-xl font-extrabold text-white rounded-2xl hover:bg-maindark transition-colors"
                >
                  Usar ruta personalizada
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="w-full bg-main py-4 lg:py-6 flex flex-col gap-3 lg:gap-8">
        <h2 className="text-center text-base lg:text-6xl font-extrabold text-white">
          ¡Disfruta de eventos en Madrid !
        </h2>
      </section>

      <section className="w-full py-4 lg:py-8 bg-main">
        <div className="w-full h-full max-w-[1300px] px-[17px] mx-auto overflow-hidden">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            className="swiper_home py-2"
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
                slidesPerView: 4,
                spaceBetween: 20
              }
            }}
          >
            <SwiperSlide className="bg-white rounded-xl group overflow-hidden contenedor_viajes">
              <div className="w-full h-[180px] lg:h-[320px] flex flex-col relative items-center justify-center rounded-xl gap-1 lg:gap-3 pb-3 contenedor_viajes">
                <span className="font-extrabold text-sm lg:text-xl text-black absolute top-0 left-0 px-2 lg:px-4 py-0 lg:py-1 m-2 lg:m-4 bg-white border-2 border-black rounded-xl z-20">
                  1 hr.
                </span>
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={madrid}
                    alt="Tunky Perú"
                    className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform"
                  />
                </div>
                <h2 className="font-extrabold text-black text-sm lg:text-2xl">
                  2 días en Madrid
                </h2>
                <Link
                  to="/rutas"
                  className="bg-main px-2 lg:px-6 py-2 text-[2.8vw] md:text-[1.3vw] lg:text-xl font-extrabold text-white rounded-2xl hover:bg-maindark transition-colors"
                >
                  Usar ruta personalizada
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-xl group overflow-hidden contenedor_viajes">
              <div className="w-full h-[180px] lg:h-[320px] flex flex-col relative items-center justify-center rounded-xl gap-1 lg:gap-3 pb-3 contenedor_viajes">
                <span className="font-extrabold text-sm lg:text-xl text-black absolute top-0 left-0 px-2 lg:px-4 py-0 lg:py-1 m-2 lg:m-4 bg-white border-2 border-black rounded-xl z-20">
                  2 dias
                </span>
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={madrid}
                    alt="Tunky Perú"
                    className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform"
                  />
                </div>
                <h2 className="font-extrabold text-black text-sm lg:text-2xl">
                  2 días en Madrid
                </h2>
                <Link
                  to="/rutas"
                  className="bg-main px-2 lg:px-6 py-2 text-[2.8vw] md:text-[1.3vw] lg:text-xl font-extrabold text-white rounded-2xl hover:bg-maindark transition-colors"
                >
                  Usar ruta personalizada
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-xl group overflow-hidden contenedor_viajes">
              <div className="w-full h-[180px] lg:h-[320px] flex flex-col relative items-center justify-center rounded-xl gap-1 lg:gap-3 pb-3 contenedor_viajes">
                <span className="font-extrabold text-sm lg:text-xl text-black absolute top-0 left-0 px-2 lg:px-4 py-0 lg:py-1 m-2 lg:m-4 bg-white border-2 border-black rounded-xl z-20">
                  2 dias
                </span>
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={madrid}
                    alt="Tunky Perú"
                    className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform"
                  />
                </div>
                <h2 className="font-extrabold text-black text-sm lg:text-2xl">
                  2 días en Madrid
                </h2>
                <Link
                  to="/rutas"
                  className="bg-main px-2 lg:px-6 py-2 text-[2.8vw] md:text-[1.3vw] lg:text-xl font-extrabold text-white rounded-2xl hover:bg-maindark transition-colors"
                >
                  Usar ruta personalizada
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-xl group overflow-hidden contenedor_viajes">
              <div className="w-full h-[180px] lg:h-[320px] flex flex-col relative items-center justify-center rounded-xl gap-1 lg:gap-3 pb-3 contenedor_viajes">
                <span className="font-extrabold text-sm lg:text-xl text-black absolute top-0 left-0 px-2 lg:px-4 py-0 lg:py-1 m-2 lg:m-4 bg-white border-2 border-black rounded-xl z-20">
                  2 dias
                </span>
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={madrid}
                    alt="Tunky Perú"
                    className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform"
                  />
                </div>
                <h2 className="font-extrabold text-black text-sm lg:text-2xl">
                  2 días en Madrid
                </h2>
                <Link
                  to="/rutas"
                  className="bg-main px-2 lg:px-6 py-2 text-[2.8vw] md:text-[1.3vw] lg:text-xl font-extrabold text-white rounded-2xl hover:bg-maindark transition-colors"
                >
                  Usar ruta personalizada
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-xl group overflow-hidden contenedor_viajes">
              <div className="w-full h-[180px] lg:h-[320px] flex flex-col relative items-center justify-center rounded-xl gap-1 lg:gap-3 pb-3 contenedor_viajes">
                <span className="font-extrabold text-sm lg:text-xl text-black absolute top-0 left-0 px-2 lg:px-4 py-0 lg:py-1 m-2 lg:m-4 bg-white border-2 border-black rounded-xl z-20">
                  2 dias
                </span>
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={madrid}
                    alt="Tunky Perú"
                    className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform"
                  />
                </div>
                <h2 className="font-extrabold text-black text-sm lg:text-2xl">
                  2 días en Madrid
                </h2>
                <Link
                  to="/rutas"
                  className="bg-main px-2 lg:px-6 py-2 text-[2.8vw] md:text-[1.3vw] lg:text-xl font-extrabold text-white rounded-2xl hover:bg-maindark transition-colors"
                >
                  Usar ruta personalizada
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-xl group overflow-hidden contenedor_viajes">
              <div className="w-full h-[180px] lg:h-[320px] flex flex-col relative items-center justify-center rounded-xl gap-1 lg:gap-3 pb-3 contenedor_viajes">
                <span className="font-extrabold text-sm lg:text-xl text-black absolute top-0 left-0 px-2 lg:px-4 py-0 lg:py-1 m-2 lg:m-4 bg-white border-2 border-black rounded-xl z-20">
                  2 dias
                </span>
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={madrid}
                    alt="Tunky Perú"
                    className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform"
                  />
                </div>
                <h2 className="font-extrabold text-black text-sm lg:text-2xl">
                  2 días en Madrid
                </h2>
                <Link
                  to="/rutas"
                  className="bg-main px-2 lg:px-6 py-2 text-[2.8vw] md:text-[1.3vw] lg:text-xl font-extrabold text-white rounded-2xl hover:bg-maindark transition-colors"
                >
                  Usar ruta personalizada
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="w-full bg-[#EEEEEE] ">
        <div className="w-full h-full max-w-[1450px] mx-auto px-10 py-10">
          <div className="w-full h-full flex items-center justify-center bg-white rounded-xl overflow-hidden contenido_sombra">
            <div className="w-2/5">
              {
                <Calendar
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-expect-error
                  onChange={handleDateChange}
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-expect-error
                  value={date}
                  locale="es"
                  className="contenido_calendario"
                />
              }
            </div>
            <div className="w-3/5 overflow-y-auto grid grid-cols-1 gap-5 py-5 pr-3 h-[360px]">
              <div className="w-full flex gap-3 h-[150px] relative contenido_sombra rounded-xl overflow-hidden">
                <div className="w-2/5 h-full">
                  <img
                    src={barcelona}
                    alt="Tunky Perú"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-3/5 h-full py-2 flex flex-col justify-between">
                  <h2 className="font-extrabold text-2xl w-full">
                    Espectaculo de Flamenco
                  </h2>
                  <div className="flex justify-between items-center">
                    <div className="w-full h-full flex items-center justify-center gap-3">
                      <span className="font-medium text-base">
                        18:00 - 22:00
                      </span>
                      <span className="font-medium text-base">
                        18:00 - 22:00
                      </span>
                    </div>
                    <div className="w-full flex justify-end px-2 ">
                      <Link
                        to="#"
                        className="font-extrabold text-lg border-main border-2 px-4 py-1 rounded-2xl"
                      >
                        Espectáculos
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex gap-3 h-[150px] relative contenido_sombra rounded-xl overflow-hidden">
                <div className="w-2/5 h-full">
                  <img
                    src={barcelona}
                    alt="Tunky Perú"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-3/5 h-full py-2 flex flex-col justify-between">
                  <h2 className="font-extrabold text-2xl w-full">
                    Espectaculo de Flamenco
                  </h2>
                  <div className="flex justify-between items-center">
                    <div className="w-full h-full flex items-center justify-center gap-3">
                      <span className="font-medium text-base">
                        18:00 - 22:00
                      </span>
                      <span className="font-medium text-base">
                        18:00 - 22:00
                      </span>
                    </div>
                    <div className="w-full flex justify-end px-2 ">
                      <Link
                        to="#"
                        className="font-extrabold text-lg border-main border-2 px-4 py-1 rounded-2xl"
                      >
                        Espectáculos
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex gap-3 h-[150px] relative contenido_sombra rounded-xl overflow-hidden">
                <div className="w-2/5 h-full">
                  <img
                    src={barcelona}
                    alt="Tunky Perú"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-3/5 h-full py-2 flex flex-col justify-between">
                  <h2 className="font-extrabold text-2xl w-full">
                    Espectaculo de Flamenco
                  </h2>
                  <div className="flex justify-between items-center">
                    <div className="w-full h-full flex items-center justify-center gap-3">
                      <span className="font-medium text-base">
                        18:00 - 22:00
                      </span>
                      <span className="font-medium text-base">
                        18:00 - 22:00
                      </span>
                    </div>
                    <div className="w-full flex justify-end px-2 ">
                      <Link
                        to="#"
                        className="font-extrabold text-lg border-main border-2 px-4 py-1 rounded-2xl"
                      >
                        Espectáculos
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex gap-3 h-[150px] relative contenido_sombra rounded-xl overflow-hidden">
                <div className="w-2/5 h-full">
                  <img
                    src={barcelona}
                    alt="Tunky Perú"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-3/5 h-full py-2 flex flex-col justify-between">
                  <h2 className="font-extrabold text-2xl w-full">
                    Espectaculo de Flamenco
                  </h2>
                  <div className="flex justify-between items-center">
                    <div className="w-full h-full flex items-center justify-center gap-3">
                      <span className="font-medium text-base">
                        18:00 - 22:00
                      </span>
                      <span className="font-medium text-base">
                        18:00 - 22:00
                      </span>
                    </div>
                    <div className="w-full flex justify-end px-2 ">
                      <Link
                        to="#"
                        className="font-extrabold text-lg border-main border-2 px-4 py-1 rounded-2xl"
                      >
                        Espectáculos
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-4 lg:py-4 bg-[#EEEEEE] ">
        <div className="w-full h-full max-w-[1350px] px-[17px] mx-auto">
          <h2 className="font-extrabold text-3xl">Top +10 visitados {'>>'}</h2>
        </div>
      </section>

      <section className="w-full py-4 lg:py-0 bg-[#EEEEEE]">
        <div className="w-full h-full max-w-[1350px] px-[17px] mx-auto overflow-hidden">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            className="swiper_home py-2"
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
                slidesPerView: 4,
                spaceBetween: 20
              }
            }}
          >
            <SwiperSlide className="bg-white rounded-xl group overflow-hidden contenedor_viajes contenedor_viajes">
              <div className="w-full h-[180px] lg:h-[320px] flex flex-col relative items-start justify-center rounded-xl gap-1 lg:gap-3 pb-3 contenedor_viajes">
                <span className="font-extrabold text-sm lg:text-xl text-black absolute top-0 left-0 px-2 lg:px-4 py-0 lg:py-1 m-2 lg:m-4 bg-white border-2 border-black rounded-xl z-20">
                  2 dias
                </span>
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={madrid}
                    alt="Tunky Perú"
                    className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform"
                  />
                </div>
                <h2 className="font-extrabold text-black text-sm lg:text-xl text-left px-4">
                  2 días en Madrid
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-xl group overflow-hidden contenedor_viajes contenedor_viajes">
              <div className="w-full h-[180px] lg:h-[320px] flex flex-col relative items-start justify-center rounded-xl gap-1 lg:gap-3 pb-3 contenedor_viajes">
                <span className="font-extrabold text-sm lg:text-xl text-black absolute top-0 left-0 px-2 lg:px-4 py-0 lg:py-1 m-2 lg:m-4 bg-white border-2 border-black rounded-xl z-20">
                  2 dias
                </span>
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={madrid}
                    alt="Tunky Perú"
                    className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform"
                  />
                </div>
                <h2 className="font-extrabold text-black text-sm lg:text-xl text-left px-4">
                  2 días en Madrid
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-xl group overflow-hidden contenedor_viajes contenedor_viajes">
              <div className="w-full h-[180px] lg:h-[320px] flex flex-col relative items-start justify-center rounded-xl gap-1 lg:gap-3 pb-3 contenedor_viajes">
                <span className="font-extrabold text-sm lg:text-xl text-black absolute top-0 left-0 px-2 lg:px-4 py-0 lg:py-1 m-2 lg:m-4 bg-white border-2 border-black rounded-xl z-20">
                  2 dias
                </span>
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={madrid}
                    alt="Tunky Perú"
                    className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform"
                  />
                </div>
                <h2 className="font-extrabold text-black text-sm lg:text-xl text-left px-4">
                  2 días en Madrid
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-xl group overflow-hidden contenedor_viajes contenedor_viajes">
              <div className="w-full h-[180px] lg:h-[320px] flex flex-col relative items-start justify-center rounded-xl gap-1 lg:gap-3 pb-3 contenedor_viajes">
                <span className="font-extrabold text-sm lg:text-xl text-black absolute top-0 left-0 px-2 lg:px-4 py-0 lg:py-1 m-2 lg:m-4 bg-white border-2 border-black rounded-xl z-20">
                  2 dias
                </span>
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={madrid}
                    alt="Tunky Perú"
                    className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform"
                  />
                </div>
                <h2 className="font-extrabold text-black text-sm lg:text-xl text-left px-4">
                  2 días en Madrid
                </h2>
              </div>
            </SwiperSlide>{' '}
            <SwiperSlide className="bg-white rounded-xl group overflow-hidden contenedor_viajes contenedor_viajes">
              <div className="w-full h-[180px] lg:h-[320px] flex flex-col relative items-start justify-center rounded-xl gap-1 lg:gap-3 pb-3 contenedor_viajes">
                <span className="font-extrabold text-sm lg:text-xl text-black absolute top-0 left-0 px-2 lg:px-4 py-0 lg:py-1 m-2 lg:m-4 bg-white border-2 border-black rounded-xl z-20">
                  2 dias
                </span>
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={madrid}
                    alt="Tunky Perú"
                    className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform"
                  />
                </div>
                <h2 className="font-extrabold text-black text-sm lg:text-xl text-left px-4">
                  2 días en Madrid
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-xl group overflow-hidden contenedor_viajes contenedor_viajes">
              <div className="w-full h-[180px] lg:h-[320px] flex flex-col relative items-start justify-center rounded-xl gap-1 lg:gap-3 pb-3 contenedor_viajes">
                <span className="font-extrabold text-sm lg:text-xl text-black absolute top-0 left-0 px-2 lg:px-4 py-0 lg:py-1 m-2 lg:m-4 bg-white border-2 border-black rounded-xl z-20">
                  2 dias
                </span>
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={madrid}
                    alt="Tunky Perú"
                    className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform"
                  />
                </div>
                <h2 className="font-extrabold text-black text-sm lg:text-xl text-left px-4">
                  2 días en Madrid
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-xl group overflow-hidden contenedor_viajes contenedor_viajes">
              <div className="w-full h-[180px] lg:h-[320px] flex flex-col relative items-start justify-center rounded-xl gap-1 lg:gap-3 pb-3 contenedor_viajes">
                <span className="font-extrabold text-sm lg:text-xl text-black absolute top-0 left-0 px-2 lg:px-4 py-0 lg:py-1 m-2 lg:m-4 bg-white border-2 border-black rounded-xl z-20">
                  2 dias
                </span>
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={madrid}
                    alt="Tunky Perú"
                    className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform"
                  />
                </div>
                <h2 className="font-extrabold text-black text-sm lg:text-xl text-left px-4">
                  2 días en Madrid
                </h2>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="w-full py-4 lg:py-4 bg-[#EEEEEE] ">
        <div className="w-full h-full max-w-[1350px] px-[17px] mx-auto">
          <h2 className="font-extrabold text-3xl">Información de interes</h2>
        </div>
      </section>

      <section className="w-full py-4 lg:py-0 lg:pb-10 bg-[#EEEEEE]">
        <div className="w-full h-full max-w-[1350px] px-[17px] mx-auto overflow-hidden">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            className="swiper_home py-2"
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
                slidesPerView: 4,
                spaceBetween: 20
              }
            }}
          >
            <SwiperSlide className="bg-white rounded-xl group overflow-hidden contenedor_viajes contenedor_viajes">
              <div className="w-full h-[180px] lg:h-[320px] flex flex-col relative items-start justify-center rounded-xl gap-1 lg:gap-3 pb-3 contenedor_viajes">
                <span className="font-extrabold text-sm lg:text-xl text-black absolute top-0 left-0 px-2 lg:px-4 py-0 lg:py-1 m-2 lg:m-4 bg-white border-2 border-black rounded-xl z-20">
                  2 dias
                </span>
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={madrid}
                    alt="Tunky Perú"
                    className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform"
                  />
                </div>
                <h2 className="font-extrabold text-black text-sm lg:text-xl text-left px-4">
                  2 días en Madrid
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-xl group overflow-hidden contenedor_viajes contenedor_viajes">
              <div className="w-full h-[180px] lg:h-[320px] flex flex-col relative items-start justify-center rounded-xl gap-1 lg:gap-3 pb-3 contenedor_viajes">
                <span className="font-extrabold text-sm lg:text-xl text-black absolute top-0 left-0 px-2 lg:px-4 py-0 lg:py-1 m-2 lg:m-4 bg-white border-2 border-black rounded-xl z-20">
                  2 dias
                </span>
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={madrid}
                    alt="Tunky Perú"
                    className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform"
                  />
                </div>
                <h2 className="font-extrabold text-black text-sm lg:text-xl text-left px-4">
                  2 días en Madrid
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-xl group overflow-hidden contenedor_viajes contenedor_viajes">
              <div className="w-full h-[180px] lg:h-[320px] flex flex-col relative items-start justify-center rounded-xl gap-1 lg:gap-3 pb-3 contenedor_viajes">
                <span className="font-extrabold text-sm lg:text-xl text-black absolute top-0 left-0 px-2 lg:px-4 py-0 lg:py-1 m-2 lg:m-4 bg-white border-2 border-black rounded-xl z-20">
                  2 dias
                </span>
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={madrid}
                    alt="Tunky Perú"
                    className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform"
                  />
                </div>
                <h2 className="font-extrabold text-black text-sm lg:text-xl text-left px-4">
                  2 días en Madrid
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-xl group overflow-hidden contenedor_viajes contenedor_viajes">
              <div className="w-full h-[180px] lg:h-[320px] flex flex-col relative items-start justify-center rounded-xl gap-1 lg:gap-3 pb-3 contenedor_viajes">
                <span className="font-extrabold text-sm lg:text-xl text-black absolute top-0 left-0 px-2 lg:px-4 py-0 lg:py-1 m-2 lg:m-4 bg-white border-2 border-black rounded-xl z-20">
                  2 dias
                </span>
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={madrid}
                    alt="Tunky Perú"
                    className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform"
                  />
                </div>
                <h2 className="font-extrabold text-black text-sm lg:text-xl text-left px-4">
                  2 días en Madrid
                </h2>
              </div>
            </SwiperSlide>{' '}
            <SwiperSlide className="bg-white rounded-xl group overflow-hidden contenedor_viajes contenedor_viajes">
              <div className="w-full h-[180px] lg:h-[320px] flex flex-col relative items-start justify-center rounded-xl gap-1 lg:gap-3 pb-3 contenedor_viajes">
                <span className="font-extrabold text-sm lg:text-xl text-black absolute top-0 left-0 px-2 lg:px-4 py-0 lg:py-1 m-2 lg:m-4 bg-white border-2 border-black rounded-xl z-20">
                  2 dias
                </span>
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={madrid}
                    alt="Tunky Perú"
                    className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform"
                  />
                </div>
                <h2 className="font-extrabold text-black text-sm lg:text-xl text-left px-4">
                  2 días en Madrid
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-xl group overflow-hidden contenedor_viajes contenedor_viajes">
              <div className="w-full h-[180px] lg:h-[320px] flex flex-col relative items-start justify-center rounded-xl gap-1 lg:gap-3 pb-3 contenedor_viajes">
                <span className="font-extrabold text-sm lg:text-xl text-black absolute top-0 left-0 px-2 lg:px-4 py-0 lg:py-1 m-2 lg:m-4 bg-white border-2 border-black rounded-xl z-20">
                  2 dias
                </span>
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={madrid}
                    alt="Tunky Perú"
                    className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform"
                  />
                </div>
                <h2 className="font-extrabold text-black text-sm lg:text-xl text-left px-4">
                  2 días en Madrid
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-xl group overflow-hidden contenedor_viajes contenedor_viajes">
              <div className="w-full h-[180px] lg:h-[320px] flex flex-col relative items-start justify-center rounded-xl gap-1 lg:gap-3 pb-3 contenedor_viajes">
                <span className="font-extrabold text-sm lg:text-xl text-black absolute top-0 left-0 px-2 lg:px-4 py-0 lg:py-1 m-2 lg:m-4 bg-white border-2 border-black rounded-xl z-20">
                  2 dias
                </span>
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={madrid}
                    alt="Tunky Perú"
                    className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform"
                  />
                </div>
                <h2 className="font-extrabold text-black text-sm lg:text-xl text-left px-4">
                  2 días en Madrid
                </h2>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  )
}
