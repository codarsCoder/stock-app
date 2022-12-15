import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const PrivateRouter = () => {
  const { login } = useAuth();

  useEffect(() => {
    
  login({email:"nr.arslan@gmail.com",password:"Nuri2216--"})
  }, [])
  
  return (
   <Outlet/>
  )
}

export default PrivateRouter