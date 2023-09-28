import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '../context/AuthProvider'
import { PublicLayout } from '../components/public/PublicLayout'
import { Home } from '../components/public/Home'
import { Ciudades } from '../components/public/Ciudades'
import { Rutas } from '../components/public/Rutas'
import { Carrito } from '../components/public/Carrito'
import { Blogs } from '../components/public/Blogs'
import { ViewBlog } from '../components/public/ViewBlog'
import { Nosotros } from '../components/public/Nosotros'

export const Routing = (): JSX.Element => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home/>} />
            <Route path='ciudades' element={<Ciudades/>} />
            <Route path='carrito' element={<Carrito/>} />
            <Route path='blogs' element={<Blogs/>} />
            <Route path='view-blog' element={<ViewBlog/>} />
            <Route path='nosotros' element={<Nosotros/>} />
          </Route>
            <Route path='rutas' element={<Rutas/>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
