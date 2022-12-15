import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import useStocks from '../hooks/useStocks';

const Purchases = () => {

  const { getPurchases } = useStocks();

  const {purchases} = useSelector((state)=>state.stock)

    useEffect(() => {
      getPurchases();
    }, [])
    
    return (
      <div>{purchases?.map(item => 
        <>
        <p>id: {item.id}</p>
        <p>User: {item.user}</p>
        <p>Firm: {item.firm}</p>
        <p>Brand: {item.brand}</p>
        <p>Product: {item.product}</p>
        <p>Quantity: {item.quantity}</p>
        <p>Price: {item.price}</p>
        <p>Price_total: {item.price_total}</p>
        <p>Created: {item.createds}</p>
        <hr />
        </>      
        )}</div>
    )
}

export default Purchases