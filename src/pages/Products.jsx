import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import useStocks from '../hooks/useStocks';

const Products = () => {
  const { getProducts } = useStocks();
const { products } = useSelector((state)=>state.stock)

  useEffect(() => {
    getProducts();
  }, [])
  
  return (
    <div>{products?.map(item => 
      <>
      <p>id: {item.id}</p>
      <p>Name: {item.name}</p>
      <p>category: {item.category}</p>
      <p>Brand: {item.brand}</p>
      <p>Stock: {item.stock}</p>
      <hr />
      
      
      </>
      
      
      
      )}</div>
  )
}

export default Products