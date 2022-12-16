import React from 'react'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import useStocks from '../hooks/useStocks';
import { MdDeleteForever, MdEdit } from 'react-icons/md'

const ProductTables = ({info, setInfo,handleShow}) => {

    const { products } = useSelector((state) => state.stock);
    const { deleteProduct } = useStocks();

   const handleShowEdit = (item) => {
     handleShow();
     setInfo(item);
    }

    const trash = {
      cursor : "pointer",
      fontSize: "1.5rem"
    }

    const edit = {
      cursor : "pointer",
      fontSize: "1.3rem"
    }

    const table_style = {
     boxShadow: "0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%)"
    }
  return (
    <Table style={table_style}striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Category</th>
        <th>Brand</th>
        <th>Name</th>
        <th>Stock</th>
        <th style={{width:"5%"}}>Operation</th>
      </tr>
    </thead>
    <tbody>
        {products?.map((item,index) => {
          return (
                   <tr key={item.id}>
        <td>{index+1}</td>
        <td>{item.category}</td>
        <td>{item.brand}</td>
        <td>{item.name}</td>
        <td>{item.stock}</td>
        <td><MdDeleteForever style={trash} onClick={()=>deleteProduct(item.id)}/> <MdEdit style={edit} onClick={()=>handleShowEdit(item)}/></td>
      </tr>
          )
        })}
    </tbody>
  </Table>
  )
}

export default ProductTables
