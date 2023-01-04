import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import useStocks from '../hooks/useStocks';
import AddFirmsModal from '../modals/AddPurchasesModal';
import PurchaseTable from '../tables/PurchaseTable';


const Purchases = () => {

  const [show, setShow] = useState(false);
  const [info, setInfo] = useState({});
  const handleShow = () => setShow(true);
  const { getAllStockData } = useStocks();

  useEffect(() => {
    getAllStockData();
  }, []);

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Add Purchases
      </Button> <br /> <br />
      <PurchaseTable info={info} setInfo={setInfo} handleShow={handleShow} />
      <AddFirmsModal show={show} setShow={setShow} info={info} setInfo={setInfo} />
    </>

  )
}

export default Purchases