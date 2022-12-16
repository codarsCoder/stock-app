import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import AddBrandModal from '../modals/AddBrandModal';

const Brands = () => {

  const { brands } = useSelector((state) => state.stock);
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState({});
  const handleShow = () => setShow(true);
  
    return (
      <>
       <Button variant="dark" onClick={handleShow}>
        Add Brand
      </Button> <br /> <br />
       <div>{brands?.map(item => 
        <div key={item.id}>
        <img width={300} src={item.image} alt="" />
        <p>id: {item.id}</p>
        <p>Name: {item.name}</p>
        <hr /> 
        </div>
        )}
          <AddBrandModal show={show} setShow={setShow} info={info} setInfo={setInfo}  />
        </div>
      </>
     
    )
}

export default Brands