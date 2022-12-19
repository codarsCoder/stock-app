import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import useStocks from '../hooks/useStocks';

const AddPurchasesModal = ({ show, setShow, info, setInfo }) => {

  const { putPurchase, postPurchase } = useStocks();
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

  const handleClose = () => {
    setShow(false);
    setInfo({});
  }
  const { firms, brands, products } = useSelector((state) => state.stock);
  console.log(info);
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
                if(info?.id){
                  info?.id ? <option >{info.firm}</option> : ""
                }else {
                  <>
                    <option>Firm</option>
                    {firms?.map((item) => {
                      return (
                        <option key={item.id} value={item.id} > {item.name}</option>
                      )
                    })}
                  </>
                }
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="brand">Select Brand</Form.Label>
              <Form.Select onChange={handleChange} name="brand_id" id="brand" required>
                if(info?.id){
                  info?.id ? <option >{info.brand}</option> : ""
                }else {
                  <>
                    <option>Brand</option>
                    {brands?.map((item) => {
                      return (
                        <option key={item.id} value={item.id} > {item.name}</option>
                      )
                    })}
                  </>
                }

              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="product">Select Product</Form.Label>
              <Form.Select onChange={handleChange} name="product_id" id="product" required>
                if(info?.id){
                  info?.id ? <option >{info.product}</option> : ""
                }else {
                  <>
                    {products?.filter(item => item.brand_id == info.brand_id).map((item) => {
                      return (
                        <option key={item.id} value={item.id} > {item.name}</option>
                      )
                    })}
                  </>
                }
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Quantity</Form.Label>
              <Form.Control onChange={handleChange} name="quantity" type="text" placeholder="Quantity" value={info?.quantity || ""} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control onChange={handleChange} name="price" type="text" placeholder="Price" value={info?.price || ""} required />
            </Form.Group>
            <Form.Group className="mb-3 d-flex gap-1">
              <Button type="submit">{info?.id ? "Update Purchase" : "Add New Purchase"}</Button>
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