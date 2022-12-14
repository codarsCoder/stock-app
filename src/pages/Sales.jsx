import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import AddSalesModal from '../modals/AddSalesModal';
import useStocks from '../hooks/useStocks';
import SaleTable from '../tables/SaleTable';

const Sales = () => {


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
        Add Sales
      </Button> <br /> <br />
      <SaleTable info={info} setInfo={setInfo} handleShow={handleShow} />
      <AddSalesModal show={show} setShow={setShow} info={info} setInfo={setInfo} />
    </>
  )
}

export default Sales
