import { Link } from 'react-router-dom'
import { blog1 } from '../shared/Images'
import { useEffect } from 'react'

export const Blogs = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="blog">
      <div className="blog__title">
        <h1>Blogs</h1>
      </div>
      <div className="blog__main">
        <Link to="/view-blog" className="cardBlog">
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
        </Link>
        <Link to="/view-blog" className="cardBlog">
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
        </Link>
        <Link to="/view-blog" className="cardBlog">
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
        </Link>
        <Link to="/view-blog" className="cardBlog">
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
        </Link>
        <Link to="/view-blog" className="cardBlog">
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
        </Link>
        <Link to="/view-blog" className="cardBlog">
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
        </Link>
      </div>
    </div>
  )
}
