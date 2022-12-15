import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import useStocks from '../hooks/useStocks';

const Sales = () => {
const { getSales } = useStocks();
const {sales} = useSelector((state)=>state.stock)
  useEffect(() => {
    getSales();
  }, [])
  
  return (
    <div>{sales?.map(item => 
      <>
      <p>id: {item.id}</p>
      <p>Brand: {item.brand}</p>
      <p>Product: {item.product}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Price: {item.price}</p>
      <p>Price_total: {item.price_total}</p>
      <p>Created: {item.created}</p>
      <hr />
      
      
      </>
      
      
      
      )}</div>
  )
}

export default Sales
