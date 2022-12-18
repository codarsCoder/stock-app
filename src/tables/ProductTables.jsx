import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import useStocks from '../hooks/useStocks';
import { MdDeleteForever, MdEdit } from 'react-icons/md'
import { HiSortAscending, HiSortDescending } from 'react-icons/hi';

const ProductTables = ({ info, setInfo, handleShow }) => {

  const { products } = useSelector((state) => state.stock);
  const { deleteProduct } = useStocks();
  const [arrow, setArrow] = useState({ id: -1, brand: -1, name: -1, stock: -1 })
  const [sortedProducts, setSortedProducts] = useState(products)

  useEffect(() => {
    setSortedProducts(products)
  }, [products])


  const handleShowEdit = (item) => {
    handleShow();
    setInfo(item);
  }
  console.log(sortedProducts)
  const handleArrow = (param) => {
    setArrow({ id: -1, brand: -1, name: -1, stock: -1, [param]: arrow[param] * -1 })  //  [param]:arrow.param * -1   çalışmadı !!!

    setSortedProducts(sortedProducts?.map(item => item).sort((a, b) => {
      if (!isNaN(Number(a[param]))) {
       return arrow[param] * (a[param] - b[param])
      } else {
        if (arrow[param] === 1) {
          return b[param] > a[param] ? 1 : b[param] < a[param] ? -1 : 0;
        } else {
          return a[param] > b[param] ? 1 : a[param] < b[param] ? -1 : 0;
        }
      }

    })

    )
  }


const trash = {
  cursor: "pointer",
  fontSize: "1.5rem",
  color: { sm: "red", lg: "white" }
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
      {sortedProducts?.map((item, index) => {
        return (
          <tr key={item.id}>
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
)
}

export default ProductTables
