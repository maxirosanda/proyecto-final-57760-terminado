import React, { useContext } from 'react'
import CartContext from '../../context/cart/CartContext'
import './ItemCart.css'

const ItemCart = ({item}) => {
    const {deleteItemCart} = useContext(CartContext)
  return (
    <div className='itemCart'>
        <h3>{item.title}</h3>
        <img src={item.image}/>
        <span>Precio: {item.price}</span>
        <span>Cantidad: {item.cuantity}</span>
        <button onClick={()=>deleteItemCart(item.id)}>Borrar</button>
    </div>
  )
}

export default ItemCart