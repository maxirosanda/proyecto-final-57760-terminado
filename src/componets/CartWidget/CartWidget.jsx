import React, { useContext } from 'react'
import CartContext from '../../context/cart/CartContext'

const CartWidget = () => {
    const {totalCuantityCart} = useContext(CartContext)
  return (
    <div>Carrito {totalCuantityCart}</div>
  )
}

export default CartWidget