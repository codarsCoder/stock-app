import axios from 'axios';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import useStocks from '../hooks/useStocks';

const Home = () => {

  const { token } = useSelector((state) => state.auth);
  const { getAllStockData } = useStocks();


  useEffect(() => {
    getAllStockData();
  }, [])

  return (
    <div className='text-center'>{token}</div>
  )
}

export default Home