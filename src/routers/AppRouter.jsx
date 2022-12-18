import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Home from '../pages/Home'
import Purchases from '../pages/Purchases'
import Sales from '../pages/Sales'
import Firms from '../pages/Firms'
import Brands from '../pages/Brands'
import Products from '../pages/Products'
import PrivateRouter from './PrivateRouter'
import Login from '../pages/Login'
import AuthRouter from './AuthRouter'

const AppRouter = () => {
  return (
    
     <Routes>
       <Route path="login" element={<AuthRouter />}>
         <Route path="" element={<Login />} />
       </Route>
     
      <Route path="/" element={<PrivateRouter />}>
        <Route path="" element={<Sidebar />}>
          <Route index element={<Home />} />
          <Route path="purchases" element={<Purchases />} />
          <Route path="sales" element={<Sales />} />
          <Route path="products" element={<Products />} />
          <Route path="firms" element={<Firms />} />
          <Route path="brands" element={<Brands />} />
        </Route>
      </Route>
    </Routes>
    
  )
}

export default AppRouter