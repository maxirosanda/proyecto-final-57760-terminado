import React  from 'react'
import CartContext from '../../context/cart/CartContext'
import { collection,addDoc,getFirestore, updateDoc,doc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import Checkout from '../Checkout/Checkout'
import ProductsContext from '../../context/products/ProductsContext'

const CheckoutContainer = () => {

  const {cart,totalPriceCart,clearCart} = useContext(CartContext)
  const {getProductById} = useContext(ProductsContext)
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
      cart.map(async item => {
        const product = await getProductById(item.id)
        const docRef = doc(db,"products",item.id)
        await updateDoc(docRef,{stock:product.stock - item.cuantity})
      })
      clearCart()
      navigate("/orders")
  }
  
  return (
    <Checkout completeOrder={completeOrder}/>
  )
}

export default CheckoutContainer