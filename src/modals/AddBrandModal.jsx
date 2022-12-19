import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import useStocks from '../hooks/useStocks';

const AddBrandModal = ({ show, setShow, info, setInfo }) => {

  const {putBrand, postBrand} = useStocks();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (info.id) {
      putBrand(info);
    } else {
      postBrand(info);
    }
    setShow(false);
    setInfo({});
  };

  const handleClose = () => {
    setShow(false); 
    setInfo({});
 } 


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Brand</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
          
         
          <Form.Group className="mb-3">
            <Form.Label>Brand</Form.Label>
            <Form.Control onChange={handleChange} name="name" type="text" placeholder="Brand Name" value ={info?.name ? info.name : ""}required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control onChange={handleChange} name="image" type="text" placeholder="Image URL"  value ={info?.image ? info.image : ""}required />
          </Form.Group>
          <Form.Group className="mb-3 d-flex gap-1">
            <Button type="submit">{info?.id ? "Update Brand" : "Add New Brand"}</Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Form.Group>
        </Form>
          
        </Modal.Body>
              
      </Modal>
    </>
  );
}

export default AddBrandModal