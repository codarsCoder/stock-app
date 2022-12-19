import React, { useEffect, useState } from 'react'
import { Button, Card, CardGroup, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import AddBrandModal from '../modals/AddBrandModal';
import useStocks from '../hooks/useStocks';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

const Brands = () => {
  
  const trash = {
    cursor: "pointer",
    fontSize: "1.5rem",
  }
  
  const edit = {
    cursor: "pointer",
    fontSize: "1.3rem"
  }
  const { brands } = useSelector((state) => state.stock);
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState({});
  const handleShow = () => setShow(true);
  const { getAllStockData } = useStocks();
  const { deleteBrand } = useStocks();
  const handleShowEdit = (item) => {
    handleShow();
    setInfo(item);
  }

  useEffect(() => {
    getAllStockData();
  }, []);
  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Add Brand
      </Button> <br /> <br />
      <Row className="gx-0" xs={1} md={2} lg={4} xl={6} >
        {brands?.map(item =>
          <Card className="m-4">
            <Card.Img variant="top" style={{ height: "200px" }} src={item.image} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
            </Card.Body>
            <Card.Footer>
            <MdDeleteForever style={trash} onClick={() => deleteBrand(item.id)} /> <MdEdit style={edit} onClick={() => handleShowEdit(item)} /> 
            </Card.Footer>
          </Card>
        )} </Row>
      <AddBrandModal show={show} setShow={setShow} info={info} setInfo={setInfo} />
    </>

  )
}

export default Brands