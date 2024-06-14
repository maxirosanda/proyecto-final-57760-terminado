import React, { useContext } from 'react'
import CartContext from '../../context/cart/CartContext'
import ItemCart from '../ItemCart/ItemCart'
import { useNavigate } from 'react-router-dom'

const ItemCartContainer = () => {
    const {cart, totalPriceCart} = useContext(CartContext)
    const navigate = useNavigate()


  return (
    <div>
        {cart.map(item => <ItemCart key={item.id} item={item} />)}
        <p>Total: {totalPriceCart}</p>
        <button onClick={()=>navigate("/checkout")}>Finalizar compra</button>
    </div>
  )
}

export default ItemCartContainer