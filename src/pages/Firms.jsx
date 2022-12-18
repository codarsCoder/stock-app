import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import useStocks from '../hooks/useStocks';
import AddFirmModal from '../modals/AddFirmModal';


const Firms = () => {


  const {firms} = useSelector((state)=>state.stock)
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState({});
  const handleShow = () => setShow(true);
  const { deleteFirm } = useStocks();
  const { getAllStockData } = useStocks();

  useEffect(() => {
    getAllStockData();
  }, []);
  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Add Firm
      </Button> <br /> <br />
     <div>{firms?.map((item,index) => 
      <div key={index}>
      <img width={300} src={item.image} alt="" />
      <p>id: {item.id}</p>
      <p>Name: {item.name}</p>
      <p>Phone: {item.phone}</p>
     
      <p>Address: {item.address}</p>
      <button onClick={()=>deleteFirm(item?.id)}>x</button>
      <hr /> 
      </div>
      )}</div>
     <AddFirmModal show={show} setShow={setShow} info={info} setInfo={setInfo}  />
    </>
   
  )
}

export default Firms