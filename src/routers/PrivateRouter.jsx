import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom';



const PrivateRouter = () => {

  const { currentUser } = useSelector((state) => state.auth);
  // useEffect(() => {
    
  // login({email:"nr.arslan@gmail.com",password:"Nuri2216--"})
  // }, [])
  // useEffect(() => {
  //   currentUser || navigate("/login");
  // }, [])
 
   currentUser ? <Outlet /> :  <Navigate to="/login" />;
}

export default PrivateRouter