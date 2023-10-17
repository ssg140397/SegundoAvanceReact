import React from 'react'
import Item from '../Item/Item'

const ItemList = () => {

  return (
    <div>
        {getProducts.map (prod => <Item key ={prod.id}{...prod}/>)}
    </div>
  )
}

export default ItemList