import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { CartPage } from './pages/CartPage'
import { OrderPage } from './pages/OrderPage'

export function Router() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/order" element={<OrderPage/>} />
    </Routes>
  )
}