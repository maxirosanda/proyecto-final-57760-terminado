import React, { useContext } from 'react'
import CartContext from '../../context/cart/CartContext'
import './ItemCart.css'
import Swal from 'sweetalert2';

const ItemCart = ({item}) => {
    const {deleteItemCart} = useContext(CartContext)

    const handleDeleteItemCart = async (id) => {
      const result = await Swal.fire({
        title: "esta seguro que quiere eliminar el producto del carrito?",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonColor: "#3614D9",
        denyButtonColor: "#453884",
        confirmButtonText: "Si",
        denyButtonText: `No`
      })

        if (result.isConfirmed) {
          deleteItemCart(id)
          Swal.fire({
            title: "Se quito el producto del carrito",
            showCancelButton: false,
            confirmButtonColor: "#3614D9",
            confirmButtonText: "Si"
          });
        } 
    }
  return (
    <div className='itemCart'>
        <h3>{item.title}</h3>
        <img src={item.image}/>
        <span>Precio: {item.price}</span>
        <span>Cantidad: {item.cuantity}</span>
        <button onClick={()=>handleDeleteItemCart(item.id)}>Borrar</button>
    </div>
  )
}

export default ItemCart