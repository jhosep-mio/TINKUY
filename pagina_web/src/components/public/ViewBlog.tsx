import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { blog1 } from '../shared/Images'
export const ViewBlog = (): JSX.Element => {
  return (
    <>
      <div className="viewblog">
        <div className="w-full h-full">
          <h1 className="text-6xl text-center texto_principal mb-10">
            CONOCE EL CUSCO
          </h1>
          <div className="w-full h-full">
            <img
              src={blog1}
              alt=""
              className="w-full h-[600px] object-cover object-center"
            />
          </div>
          <div className="w-full px-10 flex flex-col gap-4 my-10">
            <p className="text-xl text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorumfacilis, ad tempore ea ut perspiciatis quibusdam minima iusto culpa consequatur.
            </p>
            <p className="text-xl text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur praesentium error reiciendis dolorum obcaecati
              recusandae delectus quae alias, sunt illo, cupiditate magni beatae
              tempore quo harum tempora odit facere. Aliquid in molestiae
              officia, fugiat magni explicabo aperiam quas quasi laborum!
            </p>
            <p className="text-xl text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Cupiditate odit magni earum saepe officia qui molestias minima, ut
              doloribus natus temporibus. Temporibus quibusdam illum aperiam eum
              iure nulla adipisci repudiandae hic repellendus necessitatibus
              exercitationem delectus, quasi error, animi modi quisquam? Impedit
              quae error eos rem soluta cumque dolorum totam eveniet fugiat
              reiciendis quam, veritatis explicabo itaque natus perferendis
              officiis amet.
            </p>
          </div>
        </div>
      </div>

      <div className="another">
        <div className="another__title">
          <h2>Otros blogs que te pueden interesar</h2>
        </div>

        <Swiper
          slidesPerView={4}
          loop={true}
          spaceBetween={30}
          className="swp_blogs"
        >
          <SwiperSlide>
            <div className="cardBlog">
              <div className="cardBlog__img">
                <img src={blog1} alt="" />
              </div>
              <div className="cardBlog__info">
                <span>Tinkuy</span>
                <h5>Conoce el cuzco</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Necessitatibus, quaerat. Maiores eaque ab officia magnam
                  necessitatibus quasi perferendis.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cardBlog">
              <div className="cardBlog__img">
                <img src={blog1} alt="" />
              </div>
              <div className="cardBlog__info">
                <span>Tinkuy</span>
                <h5>Conoce el cuzco</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Necessitatibus, quaerat. Maiores eaque ab officia magnam
                  necessitatibus quasi perferendis.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cardBlog">
              <div className="cardBlog__img">
                <img src={blog1} alt="" />
              </div>
              <div className="cardBlog__info">
                <span>Tinkuy</span>
                <h5>Conoce el cuzco</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Necessitatibus, quaerat. Maiores eaque ab officia magnam
                  necessitatibus quasi perferendis.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cardBlog">
              <div className="cardBlog__img">
                <img src={blog1} alt="" />
              </div>
              <div className="cardBlog__info">
                <span>Tinkuy</span>
                <h5>Conoce el cuzco</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Necessitatibus, quaerat. Maiores eaque ab officia magnam
                  necessitatibus quasi perferendis.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cardBlog">
              <div className="cardBlog__img">
                <img src={blog1} alt="" />
              </div>
              <div className="cardBlog__info">
                <span>Tinkuy</span>
                <h5>Conoce el cuzco</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Necessitatibus, quaerat. Maiores eaque ab officia magnam
                  necessitatibus quasi perferendis.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cardBlog">
              <div className="cardBlog__img">
                <img src={blog1} alt="" />
              </div>
              <div className="cardBlog__info">
                <span>Tinkuy</span>
                <h5>Conoce el cuzco</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Necessitatibus, quaerat. Maiores eaque ab officia magnam
                  necessitatibus quasi perferendis.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}
