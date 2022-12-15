import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import useStocks from '../hooks/useStocks';

const Firms = () => {

  const { getFirms } = useStocks();
const {firms} = useSelector((state)=>state.stock)

  useEffect(() => {
    getFirms();
  }, [])
  
  return (
    <div>{firms?.map(item => 
      <>
      <img width={300} src={item.image} alt="" />
      <p>id: {item.id}</p>
      <p>Name: {item.name}</p>
      <p>Phone: {item.phone}</p>
     
      <p>Address: {item.address}</p>
      <hr />
      
      
      </>
      
      
      
      )}</div>
  )
}

export default Firms