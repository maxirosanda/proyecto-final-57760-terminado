import React, { useContext } from 'react'
import CartContext from '../../context/cart/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './CartWidget.module.css'

const CartWidget = () => {
    const {totalCuantityCart} = useContext(CartContext)
  return (
    <div className={styles.container}>
      <FontAwesomeIcon className={styles.cart} icon="fa-solid fa-cart-shopping" /> 
      <span className={styles.counter}>{totalCuantityCart}</span>
      </div>
  )
}

export default CartWidget