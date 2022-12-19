import React, { useEffect, useState } from 'react'

const useSortData = (data,columnObj) => { // data products , firms gibi datamız, columnObj dee tablodaki başlıklarımız

    const [arrow, setArrow] = useState(columnObj)
    const [sortedData, setSortedData] = useState(data)
    
    useEffect(() => {
        setSortedData(data)
      }, [data])


    const handleArrow = (column) => {
        setArrow({...arrow, [column]: arrow[column] * -1 })  //  [column]:arrow.column * -1   çalışmadı !!!
    
        setSortedData(sortedData?.map(item => item).sort((a, b) => {
          if (!isNaN(Number(a[column]))) {
           return arrow[column] * (a[column] - b[column])
          } else {
            if (arrow[column] === 1) {
              return b[column] > a[column] ? 1 : b[column] < a[column] ? -1 : 0;
            } else {
              return a[column] > b[column] ? 1 : a[column] < b[column] ? -1 : 0;
            }
          }
    
        })
    
        )
      }


  return (
    {handleArrow,sortedData, arrow}
  )
}

export default useSortData