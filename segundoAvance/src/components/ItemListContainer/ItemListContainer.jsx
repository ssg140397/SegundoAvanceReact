import React from 'react'
import { useState, useEffect } from 'react'
import { getProducts } from "../../asyncMock";
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greeting}) => {
    const [product, setProducts] = useState ([])

    useEffect (() => {
        getProducts ().then (response => {
            setProducts(response)
        })
        .catch (error =>{
            console.error (error)
        })
    })

    return (
    <div>
        <h1>{greeting}</h1>
        <ItemList product = {products}/>
    </div>
  )
}

export default ItemListContainer