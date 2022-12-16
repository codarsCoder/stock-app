import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import useStocks from '../hooks/useStocks';

const AddProductModal = ({ show, setShow, info, setInfo }) => {

  const { postProduct, putProduct } = useStocks();
  const { categories, brands } = useSelector((state) => state.stock);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (info.id) {
      putProduct(info);
    } else {
      postProduct(info);
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
      <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="product">Select Category</Form.Label>
              <Form.Select onChange={handleChange} name="category_id" id="category" required>
                <option >Category</option>
                {categories?.map((item) => {
                  return (
                    <option key={item.id} value={item.id} selected={item.id == info?.category_id  ? true : false}  > {item.name}</option>
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
                    <option key={item.id} value={item.id} selected={item.id == info?.brand_id  ? true : false} > {item.name}</option>
                  )
                })}
              </Form.Select>
            </Form.Group>
  
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control onChange={handleChange} name="name" type="text" placeholder="Product Name"  value ={info?.name ? info.name : ""}  required />
            </Form.Group>
            <Form.Group className="mb-3 d-flex gap-1">
              <Button type="submit"> {info?.id ? "Update Product" : "Add New Product"}</Button>
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

export default AddProductModal