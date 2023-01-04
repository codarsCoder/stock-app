import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import useStocks from '../hooks/useStocks';

const AddSalesModal = ({ show, setShow, info, setInfo }) => {

  const {putSale, postSale} = useStocks();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInfo({ ...info, [name]: Number(value) });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (info.id) {
      putSale(info);
    } else {
      postSale(info);
    }
    setShow(false);
    setInfo({});
  };

  const handleClose = () => {
    setShow(false); 
    setInfo({});
 } 

  const { firms, brands, products } = useSelector((state) => state.stock);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Sales</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
          
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
                   <option >Product</option>
                    {products?.filter(item => item.brand_id == info.brand_id).filter(item => item.stock > 0).map((item) => {  //ilk filterle sadece markaya ait ürünler gelecel ikinci filterle ise stock a saship ürünler gelecek
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
              <Button type="submit">{info?.id ? "Update Sale" : "Add New Sale"}</Button>
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

export default AddSalesModal