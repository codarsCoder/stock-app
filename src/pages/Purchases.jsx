import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import useStocks from '../hooks/useStocks';
import AddFirmsModal from '../modals/AddPurchasesModal';


const Purchases = () => {

  const [show, setShow] = useState(false);
  const [info, setInfo] = useState({});
  const {purchases} = useSelector((state)=>state.stock)
  const handleShow = () => setShow(true);
  const { getAllStockData } = useStocks();
  useEffect(() => {
    getAllStockData();
  }, []);

    return (
      <>
      <Button variant="dark" onClick={handleShow}>
        Add Purchases
      </Button> <br/> <br/> 

       <div>{
       purchases?.map(item => 
        <div key = {item.id}>
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
        </div>      
        )}
       
        </div>
          <AddFirmsModal show={show} setShow={setShow} info={info} setInfo={setInfo}  />
      </>
     
    )
}

export default Purchases