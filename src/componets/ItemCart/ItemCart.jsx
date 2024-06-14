import React, { useContext } from 'react'
import CartContext from '../../context/cart/CartContext'

const ItemCart = ({item}) => {
    const {deleteItemCart} = useContext(CartContext)
  return (
    <div>
        <h3>{item.title}</h3>
        <span>{item.cuantity}</span>
        <button onClick={()=>deleteItemCart(item.id)}>Borrar</button>
    </div>
  )
}

export default ItemCart