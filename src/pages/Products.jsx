import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import useStocks from '../hooks/useStocks';
import AddProductModal from '../modals/AddProductModal';
import ProductTables from '../tables/ProductTables';


const Products = () => {

  const { products } = useSelector((state) => state.stock)
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
        Add Product
      </Button> <br /> <br />
      <div>
        {<ProductTables info={info} setInfo={setInfo}  handleShow = {handleShow} />}
        </div>
        <AddProductModal show={show} setShow={setShow} info={info} setInfo={setInfo}  />
    </>
  )
}

export default Products