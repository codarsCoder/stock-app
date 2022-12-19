import React, { useState } from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import useStocks from '../hooks/useStocks';
import { MdDeleteForever, MdEdit } from 'react-icons/md'
import { HiSortAscending, HiSortDescending } from 'react-icons/hi';
import { MultiSelectBox, MultiSelectBoxItem } from '@tremor/react';
import useSortData from '../hooks/useSortData';

const PurchaseTable = ({ info, setInfo, handleShow }) => {

  const { purchases, products, brands } = useSelector((state) => state.stock);
  const { deletePurchase } = useStocks();
  const columnObj = {
    createds: -1,
    quantity: -1,
    price_total: -1,
    firm: -1,
    price: -1,
    brand: -1,
    product: -1,
  };
  const { handleArrow, sortedData, arrow } = useSortData(purchases, columnObj);
  const [selectedBrands, setSelectedBrands] = useState([])
  const [selectedProducts, setSelectedProducts] = useState([])



  const isSelectedBrands = (param) => {
    return selectedBrands.includes(param.brand) || selectedBrands.length === 0;   // selectbrands seçili itemin brand değerini içeriyorsa true döner vi true dönen itemler listelenmiş olur , yada  birşey seçilmemişse selectedBrands === 0  demektir yani yine true döner ve tüm listeyi almış olur    üçüncü durum olarak false döner  ve  liste sıfır döner  
  }
  const isSelectedProducts = (param) => {
    return selectedProducts.includes(param.product) || selectedProducts.length === 0;   // selectbrands seçili itemin brand değerini içeriyorsa true döner vi true dönen itemler listelenmiş olur , yada  birşey seçilmemişse selectedBrands === 0  demektir yani yine true döner ve tüm listeyi almış olur    üçüncü durum olarak false döner  ve  liste sıfır döner  
  }
  const handleShowEdit = (item) => {
    handleShow();
    setInfo(item);
  }




  const trash = {
    cursor: "pointer",
    fontSize: "1.5rem",
  }

  const edit = {
    cursor: "pointer",
    fontSize: "1.3rem"
  }

  const table_style = {
    boxShadow: "0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%)",
    padding: "10px"
  }
 
  return (
    <div className="product-style">
      <Row>
        <Col className="mb-2" xs={8} md={4}>
          <MultiSelectBox
            handleSelect={(value) => setSelectedBrands(value)}
            placeholder="Select Brand"

          >
            {brands?.map(item =>
              <MultiSelectBoxItem
                key={item.name}
                text={item.name}
                value={item.name}
              />
            )}
          </MultiSelectBox>
        </Col>
        <Col className="mb-2" xs={8} md={4}>
          <MultiSelectBox
            handleSelect={(value) => setSelectedProducts(value)}
            placeholder="Select Product"
          >
            {products?.filter(item => isSelectedBrands(item)).map(item => // önce brandlar seçildi şimdi sadece seçili brandların product isimleri gelsin diye seçili brandlara filter yapıyoruz
              <MultiSelectBoxItem
                key={item.name}
                text={item.name}
                value={item.name}
              />
            )}
          </MultiSelectBox>
        </Col>
      </Row>




      <Table style={table_style} striped bordered hover>
        <thead>
          <tr>
            <th>Date
              {arrow.createds !== 1 && <HiSortAscending className='arrow' onClick={() => handleArrow("created")} />}
              {arrow.createds === 1 && <HiSortDescending className='arrow' onClick={() => handleArrow("created")} />}
            </th>
            <th>Category</th>
            <th>Firm
              {arrow.firm !== 1 && <HiSortAscending className='arrow' onClick={() => handleArrow("firm")} />}
              {arrow.firm === 1 && <HiSortDescending className='arrow' onClick={() => handleArrow("firm")} />}</th>
            <th>Brand
              {arrow.brand !== 1 && <HiSortAscending className='arrow' onClick={() => handleArrow("brand")} />}
              {arrow.brand === 1 && <HiSortDescending className='arrow' onClick={() => handleArrow("brand")} />}</th>
            <th>Product
              {arrow.product !== 1 && <HiSortAscending className='arrow' onClick={() => handleArrow("product")} />}
              {arrow.product === 1 && <HiSortDescending className='arrow' onClick={() => handleArrow("product")} />}</th>
            <th>Quantity
              {arrow.quantity !== 1 && <HiSortAscending className='arrow' onClick={() => handleArrow("quantity")} />}
              {arrow.quantity === 1 && <HiSortDescending className='arrow' onClick={() => handleArrow("quantity")} />}</th>
            <th>Amount
              {arrow.price !== 1 && <HiSortAscending className='arrow' onClick={() => handleArrow("price")} />}
              {arrow.price === 1 && <HiSortDescending className='arrow' onClick={() => handleArrow("price")} />}</th>
            <th>T-Amount
              {arrow.price_total !== 1 && <HiSortAscending className='arrow' onClick={() => handleArrow("price_total")} />}
              {arrow.price_total === 1 && <HiSortDescending className='arrow' onClick={() => handleArrow("price_total")} />}</th>
            <th style={{ width: "5%" }}>Operation</th>
          </tr>
        </thead>
        <tbody>
          {sortedData?.filter(item=> isSelectedBrands(item)).filter(item=> isSelectedProducts(item)).map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.createds}</td>
                <td>{item.category[0]?.name}</td>
                <td>{item.firm}</td>
                <td>{item.brand}</td>
                <td>{item.product}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.price_total}</td>
                <td><MdDeleteForever style={trash} onClick={() => deletePurchase(item.id)} /> <MdEdit style={edit} onClick={() => handleShowEdit(item)} /></td>
              </tr>
            )
          })}
        </tbody>
      </Table>

    </div>

  )
}

export default PurchaseTable
