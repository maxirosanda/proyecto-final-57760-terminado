import React  from 'react'
import CartContext from '../../context/cart/CartContext'
import { collection,addDoc,getFirestore } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import Checkout from '../Checkout/Checkout'

const CheckoutContainer = () => {

  const {cart,totalPriceCart,clearCart} = useContext(CartContext)
  const navigate = useNavigate()

  const completeOrder = async (buyer) => {
 
      const order ={
          buyer,
          items:cart,
          total:totalPriceCart

      }

      const db = getFirestore()
      const docRef = collection(db,"orders")
      await addDoc(docRef,order)
      clearCart()
      navigate("/orders")
  }
  
  return (
    <Checkout completeOrder={completeOrder}/>
  )
}

export default CheckoutContainer