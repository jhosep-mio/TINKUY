import { IoSearch } from 'react-icons/io5'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
// import required modules
import { Navigation } from 'swiper/modules'
import { Link } from 'react-router-dom'
import {
  madrid,
  safe,
  slider1,
  travelPlan
} from '../shared/Images'
import { useEffect } from 'react'

export const Home = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
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
              Personaliza tu encuentro con <br /> Tinkuy-IA
            </h1>
          </div>
          <div className="w-fit lg:w-[650px] h-10 lg:h-16 flex bg-white rounded-lg p-1 justify-between">
            <input
              type="text"
              placeholder="¿A dónde te escaparias?"
              className="bg-white w-full placeholder:text-black placeholder:font-sm font-medium text-sm lg:text-2xl input_gtp pr-2"
            />
            <button className="bg-main w-auto h-full flex items-center gap-3 text-white rounded-lg font-bold px-4 text-sm lg:text-2xl">
              <IoSearch className="text-sm lg:text-4xl" /> Buscar
            </button>
          </div>
          <div className="">
            <p className="description_text font-bold text-sm lg:text-2xl hidden md:block">
              Tinkui Peru….. lugar de encuentro, disfruta de la naturaleza y de
              nuevas experiencias en Huancabamba, Ayabaca, Sechura , Morropón Y
              MUCHOS MÁS
            </p>
          </div>
        </div>
      </section>

      <section className="w-full grid grid-cols-2 md:grid-cols-4 max-w-[1450px] mx-auto px-2 lg:px-4 py-2 lg:py-10 section_sol gap-2 lg:gap-10">
        <div className="w-full h-full flex items-start lg:items-center justify-start gap-2 lg:gap-6">
          <img
            src={travelPlan}
            alt="Tunky Perú"
            className="w-10 h-10 lg:w-16 lg:h-16 object-contain m-auto"
          />
          <div className="w-full">
            <h2 className="font-extrabold text-sm lg:text-2xl text-main">
              Autenticidad
            </h2>
            <p className="font-extrabold text-xs lg:text-base ">
              Valoramos lo nuestro y queremos compartirlo contigo de una manera
              diferente y brindarte momentos innolvidables
            </p>
          </div>
        </div>
        <div className="w-full h-full flex items-start lg:items-center justify-center gap-2 lg:gap-6">
          <img
            src={travelPlan}
            alt="Tunky Perú"
            className="w-10 h-10 lg:w-16 lg:h-16 object-contain m-auto"
          />
          <div className="w-full">
            <h2 className="font-extrabold text-sm lg:text-2xl text-main">
              Destinos
            </h2>
            <p className="font-extrabold text-xs lg:text-base">
              De la amazonia al desierto de altas cumbres de los Andes al
              pacifico. Dejate enamorar por los increibles contrastes del Perú
            </p>
          </div>
        </div>
        <div className="w-full h-full flex items-start lg:items-center justify-center gap-2 lg:gap-6">
          <img
            src={travelPlan}
            alt="Tunky Perú"
            className="w-10 h-10 lg:w-16 lg:h-16 object-contain m-auto"
          />
          <div className="w-full">
            <h2 className="font-extrabold text-sm lg:text-2xl text-main">
              Soporte 24/7
            </h2>
            <p className="font-extrabold text-xs lg:text-base">
              Estamos comprometidos para brindarte la mejor experiencia de
              viaje, estamos para servirte en todo momento
            </p>
          </div>
        </div>
        <div className="w-full h-full flex items-start lg:items-start justify-center gap-2 lg:gap-6">
          <img
            src={safe}
            alt="Tunky Perú"
            className="w-10 h-10 lg:w-16 lg:h-16 object-contain m-auto"
          />
          <div className="w-full">
            <h2 className="font-extrabold text-sm lg:text-2xl text-main">
              Consigue ahorrar
            </h2>
            <p className="font-extrabold text-xs lg:text-lg ">
              Ofrecemos el proveedor más económico. Free tours, Museos, etc.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-main py-2 lg:py-6">
        <h2 className="text-center text-xl lg:text-4xl font-extrabold text-white">
          ¡Decide tu Destino!
        </h2>
      </section>

      <section className="w-full max-w-[1450px] px-4 lg:px-10 mx-auto py-4 lg:py-16">
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-10">
          <Link
            to="/ciudades"
            className="w-full h-[200px] lg:h-[320px] flex flex-col relative items-center justify-center rounded-lg contenedor_div transition-all"
          >
            <img
              src={madrid}
              alt="Tunky Perú"
              className="w-full h-full object-cover absolute inset-0 z-[-10] rounded-lg"
            />
            <h2 className="font-extrabold text-white text-2xl lg:text-5xl texto_principal">
              Madrid
            </h2>
          </Link>
          <Link
            to="/ciudades"
            className="w-full h-[200px] lg:h-[320px] flex flex-col relative items-center justify-center rounded-lg contenedor_div transition-all"
          >
            <img
              src={madrid}
              alt="Tunky Perú"
              className="w-full h-full object-cover absolute inset-0 z-[-10] rounded-lg"
            />
            <h2 className="font-extrabold text-white text-2xl lg:text-5xl texto_principal">
              Madrid
            </h2>
          </Link>
          <Link
            to="/ciudades"
            className="w-full h-[200px] lg:h-[320px] flex flex-col relative items-center justify-center rounded-lg contenedor_div transition-all"
          >
            <img
              src={madrid}
              alt="Tunky Perú"
              className="w-full h-full object-cover absolute inset-0 z-[-10] rounded-lg"
            />
            <h2 className="font-extrabold text-white text-2xl lg:text-5xl texto_principal">
              Madrid
            </h2>
          </Link>
          <Link
            to="/ciudades"
            className="w-full h-[200px] lg:h-[320px] flex flex-col relative items-center justify-center rounded-lg contenedor_div transition-all"
          >
            <img
              src={madrid}
              alt="Tunky Perú"
              className="w-full h-full object-cover absolute inset-0 z-[-10] rounded-lg"
            />
            <h2 className="font-extrabold text-white text-2xl lg:text-5xl texto_principal">
              Madrid
            </h2>
          </Link>

          <div className="w-full h-[200px] lg:h-[320px] flex flex-col relative items-center justify-center rounded-lg  transition-all opacity-60">
            <img
              src={madrid}
              alt="Tunky Perú"
              className="w-full h-full object-cover absolute inset-0 z-[-10] rounded-lg"
            />
            <h2 className="font-extrabold text-white text-2xl lg:text-5xl texto_principal">
              Madrid
            </h2>
          </div>
          <div className="w-full h-[200px] lg:h-[320px] flex flex-col relative items-center justify-center rounded-lg  transition-all opacity-60">
            <img
              src={madrid}
              alt="Tunky Perú"
              className="w-full h-full object-cover absolute inset-0 z-[-10] rounded-lg"
            />
            <h2 className="font-extrabold text-white text-2xl lg:text-5xl texto_principal">
              Madrid
            </h2>
          </div>
          <div className="w-full h-[200px] lg:h-[320px] flex flex-col relative items-center justify-center rounded-lg  transition-all opacity-60">
            <img
              src={madrid}
              alt="Tunky Perú"
              className="w-full h-full object-cover absolute inset-0 z-[-10] rounded-lg"
            />
            <h2 className="font-extrabold text-white text-2xl lg:text-5xl texto_principal">
              Madrid
            </h2>
          </div>
          <div className="w-full h-[200px] lg:h-[320px] flex flex-col relative items-center justify-center rounded-lg  transition-all opacity-60">
            <img
              src={madrid}
              alt="Tunky Perú"
              className="w-full h-full object-cover absolute inset-0 z-[-10] rounded-lg"
            />
            <h2 className="font-extrabold text-white text-2xl lg:text-5xl texto_principal">
              Madrid
            </h2>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#252525] py-4 lg:py-6 flex flex-col gap-3 lg:gap-8">
        <h2 className="text-center text-base lg:text-4xl font-extrabold text-white">
          Descubre Madrid en estas increíbles rutas
        </h2>
        <Link
          to="/rutas"
          className="bg-main px-2 lg:px-10 py-1 lg:py-3 mx-auto text-white font-extrabold text-base lg:text-3xl rounded-lg hover:bg-maindark transition-colors"
        >
          Planifica tu viaje a madrid
        </Link>
      </section>

      <section className="w-full py-4 lg:py-16 bg-[#EEEEEE]">
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
          </Swiper>
        </div>
      </section>

      <section className="w-full bg-[#252525] py-4 lg:py-6 flex flex-col gap-3 lg:gap-8">
        <h2 className="text-center text-base lg:text-4xl font-extrabold text-white">
          ¿Todavía no sabes que hacer en Barcelona?
        </h2>
        <Link
          to="/rutas"
          className="bg-main px-2 lg:px-10 py-1 lg:py-3 mx-auto text-white font-extrabold text-base lg:text-3xl rounded-lg hover:bg-maindark transition-colors"
        >
          Planifica tu viaje a barcelona
        </Link>
      </section>

      <section className="w-full py-4 lg:py-16 bg-[#EEEEEE]">
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
          </Swiper>
        </div>
      </section>

      <section className="w-full bg-[#252525] py-4 lg:py-6 flex flex-col gap-3 lg:gap-8">
        <h2 className="text-center text-base lg:text-4xl font-extrabold text-white">
          ¡Experiencia inolvidable en Valencia con estas rutas!
        </h2>
        <Link
          to="/rutas"
          className="bg-main px-2 lg:px-10 py-1 lg:py-3 mx-auto text-white font-extrabold text-base lg:text-3xl rounded-lg hover:bg-maindark transition-colors"
        >
          Planifica tu viaje a Valencia
        </Link>
      </section>

      <section className="w-full py-4 lg:py-16 bg-[#EEEEEE]">
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
          </Swiper>
        </div>
      </section>

      <section className="w-full bg-[#252525] py-4 lg:py-6 flex flex-col gap-3 lg:gap-8">
        <h2 className="text-center text-base lg:text-4xl font-extrabold text-white">
          ¡Mallorca espera tu visita haciendo estas rutas!
        </h2>
        <Link
          to="/rutas"
          className="bg-main px-2 lg:px-10 py-1 lg:py-3 mx-auto text-white font-extrabold text-base lg:text-3xl rounded-lg hover:bg-maindark transition-colors"
        >
          Planifica tu viaje a Mallorca
        </Link>
      </section>

      <section className="w-full py-4 lg:py-16 bg-[#EEEEEE]">
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
          </Swiper>
        </div>
      </section>
    </>
  )
}
