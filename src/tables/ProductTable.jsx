import React, { useState } from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import useStocks from '../hooks/useStocks';
import { MdDeleteForever, MdEdit } from 'react-icons/md'
import { HiSortAscending, HiSortDescending } from 'react-icons/hi';
import { MultiSelectBox, MultiSelectBoxItem } from '@tremor/react';
import useSortData from '../hooks/useSortData';

const ProductTable = ({ info, setInfo, handleShow }) => {

  const { products,brands } = useSelector((state) => state.stock);
  const { deleteProduct } = useStocks();
  const columnObj = {
    id : 1,
    brand: 1,
    name: 1,
    stock: 1
  }
  const {handleArrow,sortedData, arrow} = useSortData(products,columnObj);
  const [selectedBrands, setSelectedBrands] = useState([])
  const [selectedProducts, setSelectedProducts] = useState([])



 const isSelectedBrands = (param) => {
  return selectedBrands.includes(param.brand) || selectedBrands.length === 0;   // selectbrands seçili itemin brand değerini içeriyorsa true döner vi true dönen itemler listelenmiş olur , yada  birşey seçilmemişse selectedBrands === 0  demektir yani yine true döner ve tüm listeyi almış olur    üçüncü durum olarak false döner  ve  liste sıfır döner  
 }
 const isSelectedProducts = (param) => {
  return selectedProducts.includes(param.name) || selectedProducts.length === 0;   // selectbrands seçili itemin brand değerini içeriyorsa true döner vi true dönen itemler listelenmiş olur , yada  birşey seçilmemişse selectedBrands === 0  demektir yani yine true döner ve tüm listeyi almış olur    üçüncü durum olarak false döner  ve  liste sıfır döner  
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
console.log(selectedProducts);
return (
  <div className="product-style">
    <Row>
      <Col className="mb-2" xs={8} md={4}>
        <MultiSelectBox 
        handleSelect={(value)=>setSelectedBrands(value)}
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
        handleSelect={(value)=>setSelectedProducts(value)}
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
        <th>#
          {arrow.id !== 1 && <HiSortAscending className='arrow' onClick={() => handleArrow("id")} />}
          {arrow.id === 1 && <HiSortDescending className='arrow' onClick={() => handleArrow("id")} />}
        </th>
        <th>Category</th>
        <th>Brand
          {arrow.brand !== 1 && <HiSortAscending className='arrow' onClick={() => handleArrow("brand")} />}
          {arrow.brand === 1 && <HiSortDescending className='arrow' onClick={() => handleArrow("brand")} />}</th>
        <th>Name
          {arrow.name !== 1 && <HiSortAscending className='arrow' onClick={() => handleArrow("name")} />}
          {arrow.name === 1 && <HiSortDescending className='arrow' onClick={() => handleArrow("name")} />}</th>
        <th>Stock
          {arrow.stock !== 1 && <HiSortAscending className='arrow' onClick={() => handleArrow("stock")} />}
          {arrow.stock === 1 && <HiSortDescending className='arrow' onClick={() => handleArrow("stock")} />}</th>
        <th style={{ width: "5%" }}>Operation</th>
      </tr>
    </thead>
    <tbody>
      {sortedData?.filter(item=> isSelectedBrands(item)).filter(item=> isSelectedProducts(item)).map((item, index) => {
        return (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.category}</td>
            <td>{item.brand}</td>
            <td>{item.name}</td>
            <td>{item.stock}</td>
            <td><MdDeleteForever style={trash} onClick={() => deleteProduct(item.id)} /> <MdEdit style={edit} onClick={() => handleShowEdit(item)} /></td>
          </tr>
        )
      })}
    </tbody>
  </Table>

  </div>
  
)
}

export default ProductTable
