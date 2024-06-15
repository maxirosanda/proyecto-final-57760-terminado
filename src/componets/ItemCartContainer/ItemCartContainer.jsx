import React, { useContext } from 'react'
import CartContext from '../../context/cart/CartContext'
import ItemCart from '../ItemCart/ItemCart'
import { useNavigate } from 'react-router-dom'
import EmptyItems from '../EmptyItems/EmptyItems'
import './ItemCartContainer.css'

const ItemCartContainer = () => {
    const {cart, totalPriceCart} = useContext(CartContext)
    const navigate = useNavigate()


  return (
    <div className='cartContainer'>
        <>
          {cart.length != 0 ?
          <>
              <div className='itemCartContainer'> 
                {cart.map(item => <ItemCart key={item.id} item={item} />)}
              </div>
              <div className='checkout'>
                <p>Total: {totalPriceCart}</p>
                <button onClick={()=>navigate("/checkout")}>Finalizar compra</button>
              </div>
          
          </>
       
           :
           <EmptyItems message="No hay productos en el carrito"/>
          }
        </>
       
    </div>
  )
}

export default ItemCartContainer