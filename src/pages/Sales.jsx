import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import useStocks from '../hooks/useStocks';
import AddSalesModal from '../modals/AddSalesModal';

const Sales = () => {

  const { getSales } = useStocks();
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState({});
  const { sales } = useSelector((state) => state.stock)
  const handleShow = () => setShow(true);

  useEffect(() => {
    getSales();
  }, [])

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Add Sales
      </Button> <br /> <br />
      <div>{sales?.map(item =>
        <div key={item.id}>
          <p >id: {item.id}</p>
          <p>Brand: {item.brand}</p>
          <p>Product: {item.product}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: {item.price}</p>
          <p>Price_total: {item.price_total}</p>
          <p>Created: {item.created}</p>
          <hr />


        </div>



      )}
        <AddSalesModal show={show} setShow={setShow} info={info} setInfo={setInfo} />
      </div>

    </>
  )
}

export default Sales
