import { useEffect, useState } from 'react';
import { Button, Card, ListGroup, Row } from 'react-bootstrap';
import { MdDeleteForever, MdEdit } from 'react-icons/md';
import { useSelector } from 'react-redux';
import useStocks from '../hooks/useStocks';
import AddFirmModal from '../modals/AddFirmModal';


const Firms = () => {

  const trash = {
    cursor: "pointer",
    fontSize: "1.5rem",
  }

  const edit = {
    cursor: "pointer",
    fontSize: "1.3rem"
  }

  const { firms } = useSelector((state) => state.stock)
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState({});
  const handleShow = () => setShow(true);
  const { deleteFirm } = useStocks();
  const { getAllStockData } = useStocks();

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
        Add Firm
      </Button> <br /> <br />
      {/* <div>{firms?.map((item,index) => 
      <div key={index}>
      <img width={300} src={item.image} alt="" />
      <p>id: {item.id}</p>
      <p>Name: {item.name}</p>
      <p>Phone: {item.phone}</p>
     
      <p>Address: {item.address}</p>
      <button onClick={()=>deleteFirm(item?.id)}>x</button>
      <hr /> 
      </div>
      )}</div> */}
      <Row className="gx-0" xs={1} md={2} lg={4} xl={6} >
        {firms?.map(item =>
          <Card className="m-4">
            <Card.Img variant="top" style={{ height: "200px",padding:"10px" }} src={item.image} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>{item.phone}</ListGroup.Item>
                <ListGroup.Item>{item.address}</ListGroup.Item>
              </ListGroup>
            </Card.Body>
            <Card.Footer>
              <MdDeleteForever style={trash} onClick={() => deleteFirm(item.id)} /> <MdEdit style={edit} onClick={() => handleShowEdit(item)} />
            </Card.Footer>
          </Card>
        )} </Row>

      <AddFirmModal show={show} setShow={setShow} info={info} setInfo={setInfo} />
    </>

  )
}

export default Firms