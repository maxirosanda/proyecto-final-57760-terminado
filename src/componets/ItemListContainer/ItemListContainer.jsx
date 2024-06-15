import React, { useContext } from 'react'
import ItemList from '../ItemList/ItemList'
import ProductsContext from '../../context/products/ProductsContext'
import './ItemListContainer.css'
import EmptyItems from '../EmptyItems/EmptyItems'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import { useNavigate } from 'react-router-dom'
import Error from '../Error/Error'

const ItemListContainer = () => {

    const {products,loading,error} = useContext(ProductsContext)
    const navigate = useNavigate()

    if(loading) return <LoadingSpinner/>
    if(error) return <Error 
                        message="error al traer los productos"
                        textButton="volver a cargar" 
                        onRetry={()=>navigate(0)}
                        />
    
  return (
    <div className='cardContainer'>
        { products.length != 0 ?
          products.map(product => <ItemList key={product.id} product={product}/>)
          :
          <EmptyItems message="No hay productos disponibles"/>
         }
    </div>
  )
}

export default ItemListContainer