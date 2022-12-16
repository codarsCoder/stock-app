import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import useStocks from '../hooks/useStocks';

const AddPurchasesModal = ({ show, setShow, info, setInfo }) => {

  const {putPurchase, postPurchase} = useStocks();
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInfo({ ...info, [name]: Number(value) });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (info.id) {
      putPurchase(info);
    } else {
      postPurchase(info);
    }
    setShow(false);
    setInfo({});
  };

  const handleClose = () => setShow(false);
  const { firms, brands, products } = useSelector((state) => state.stock);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Purchases</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="firm">Select Firm</Form.Label>
              <Form.Select onChange={handleChange} name="firm_id" id="firm" required>
                <option >Firm</option>
                {firms?.map((item) => {
                  return (
                    <option key={item.id} value={item.id} > {item.name}</option>
                  )
                })}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="brand">Select Brand</Form.Label>
              <Form.Select onChange={handleChange} name="brand_id" id="brand" required>
                <option >Brand</option>
                {brands?.map((item) => {
                  return (
                    <option key={item.id} value={item.id} > {item.name}</option>
                  )
                })}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="product">Select Product</Form.Label>
              <Form.Select onChange={handleChange} name="product_id" id="product" required>
                <option >Product</option>
                {products?.map((item) => {
                  return (
                    <option key={item.id} value={item.id} > {item.name}</option>
                  )
                })}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Quantity</Form.Label>
              <Form.Control onChange={handleChange} name="quantity" type="text" placeholder="Quantity" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control onChange={handleChange} name="price" type="text" placeholder="Price" required />
            </Form.Group>
            <Form.Group className="mb-3 d-flex gap-1">
              <Button type="submit">Submit</Button>
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

export default AddPurchasesModal