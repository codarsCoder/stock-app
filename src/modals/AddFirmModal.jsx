import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import useStocks from '../hooks/useStocks';

const AddFirmModal = ({ show, setShow, info, setInfo }) => {

  const {putFirm, postFirm} = useStocks();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (info.id) {
      putFirm(info);
    } else {
      postFirm(info);
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
          <Modal.Title>Add Firm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
          
         
            <Form.Group className="mb-3">
              <Form.Label>Firm</Form.Label>
              <Form.Control onChange={handleChange} name="name" type="text" placeholder="Firm Name" value ={info?.name ? info.name : ""} required />
            </Form.Group>
         
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control onChange={handleChange} name="phone" type="text" placeholder="Phone" value ={info?.phone ? info.phone : ""} required />
            </Form.Group>
         
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control onChange={handleChange} name="address" type="text" placeholder="Address" value ={info?.address ? info.address : ""} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control onChange={handleChange} name="image" type="text" placeholder="Image URL"  value ={info?.image ? info.image : ""} required />
            </Form.Group>
            <Form.Group className="mb-3 d-flex gap-1">
              <Button type="submit">{info?.id ? "Update Firm" :"Add New Firm"} </Button>
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

export default AddFirmModal