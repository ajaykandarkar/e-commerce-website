import { Home } from '../pages'
import { Cart } from '../pages'
import { Route,Routes } from 'react-router-dom'
export const AllRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="cart" element={<Cart/>} />
      </Routes>
    </>
  )
}
