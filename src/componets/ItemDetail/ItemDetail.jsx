import React, { useContext, useState } from 'react'
import Count from '../Count/Count'
import CartContext from '../../context/cart/CartContext'
import { useNavigate } from 'react-router-dom'
import './ItemDetail.css'

const ItemDetail = ({product}) => {

    const [count ,setCount] = useState(1)
    const {addItemCart} = useContext(CartContext)
    const natigate = useNavigate()

    const addItem = () => {
        addItemCart({...product,cuantity:count})
        natigate("/cart")
    }

 
  return (
    <div className='detail'>
        <h3>{product.title}</h3>
        <img src={product.image}/>
        <p>{product.description}</p>
        <Count count={count} handleCount={setCount} stock={product.stock}/>
        <button onClick={addItem }>Carrito</button>
    </div>
  )
}

export default ItemDetail