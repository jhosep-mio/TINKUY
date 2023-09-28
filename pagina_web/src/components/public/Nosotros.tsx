import { valor } from '../shared/Images'

export const Nosotros = (): JSX.Element => {
  return (
    <section className="w-full mt-16 md:mt-20">
      <div className="w-full max-w-[1450px] flex px-10 mx-auto py-20 items-center gap-20">
        <div className="flex flex-col gap-4 w-full">
          <h1 className="font-extrabold text-6xl text-main">¿Quienes somos?</h1>
          <p className="font-medium text-lg text-justify">
            Somos un grupo de jóvenes que buscamos compartir con el mundo las
            riquezas de los lugares mas hermoso de nuestro pais y ayudar a crear
            turismo sostenible
          </p>
        </div>
        <div className="w-full">
          <iframe
            className="w-full h-96"
            src="https://www.youtube.com/embed/ceUlT67cZQg?si=iP6Q8alv9Tqu8qAd"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <section className="bg-[#F9F9F9] py-20">
        <h2 className="font-extrabold text-5xl text-main text-center">
          Nuestros valores
        </h2>
        <section className="w-full grid grid-cols-2 md:grid-cols-4 max-w-[1450px] mx-auto px-2 lg:px-4 py-2 lg:py-10 section_sol gap-2 lg:gap-4">
          <div className="w-full h-full flex flex-col items-start lg:items-center justify-center gap-2 lg:gap-2 border border-main p-4 rounded-2xl">
            <img
              src={valor}
              alt="Tunky Perú"
              className="w-10 h-10 lg:w-16 lg:h-16 object-contain m-auto"
            />
            <h2 className="font-extrabold text-sm lg:text-2xl text-main text-center">
              VALORES1
            </h2>
            <p className="font-extrabold text-xs lg:text-base text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              tempora earum quae neque asperiores commodi sit reiciendis porro
              sunt odit. Suscipit non hic consequatur culpa cum voluptatem iste
              corporis officiis?
            </p>
          </div>
          <div className="w-full h-full flex flex-col items-start lg:items-center justify-center gap-2 lg:gap-2 border border-main p-4 rounded-2xl">
            <img
              src={valor}
              alt="Tunky Perú"
              className="w-10 h-10 lg:w-16 lg:h-16 object-contain m-auto"
            />
            <h2 className="font-extrabold text-sm lg:text-2xl text-main text-center">
              VALORES1
            </h2>
            <p className="font-extrabold text-xs lg:text-base text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              tempora earum quae neque asperiores commodi sit reiciendis porro
              sunt odit. Suscipit non hic consequatur culpa cum voluptatem iste
              corporis officiis?
            </p>
          </div>
          <div className="w-full h-full flex flex-col items-start lg:items-center justify-center gap-2 lg:gap-2 border border-main p-4 rounded-2xl">
            <img
              src={valor}
              alt="Tunky Perú"
              className="w-10 h-10 lg:w-16 lg:h-16 object-contain m-auto"
            />
            <h2 className="font-extrabold text-sm lg:text-2xl text-main text-center">
              VALORES1
            </h2>
            <p className="font-extrabold text-xs lg:text-base text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              tempora earum quae neque asperiores commodi sit reiciendis porro
              sunt odit. Suscipit non hic consequatur culpa cum voluptatem iste
              corporis officiis?
            </p>
          </div>
          <div className="w-full h-full flex flex-col items-start lg:items-center justify-center gap-2 lg:gap-2 border border-main p-4 rounded-2xl">
            <img
              src={valor}
              alt="Tunky Perú"
              className="w-10 h-10 lg:w-16 lg:h-16 object-contain m-auto"
            />
            <h2 className="font-extrabold text-sm lg:text-2xl text-main text-center">
              VALORES1
            </h2>
            <p className="font-extrabold text-xs lg:text-base text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              tempora earum quae neque asperiores commodi sit reiciendis porro
              sunt odit. Suscipit non hic consequatur culpa cum voluptatem iste
              corporis officiis?
            </p>
          </div>
        </section>
      </section>
    </section>
  )
}
