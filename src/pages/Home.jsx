import axios from 'axios';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const Home = () => {
  const { token } = useSelector((state) => state.auth);

  return (
    <div className='text-center'>{token}</div>
  )
}

export default Home