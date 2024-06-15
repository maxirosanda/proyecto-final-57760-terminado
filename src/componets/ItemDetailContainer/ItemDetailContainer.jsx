import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import ProductsContext from '../../context/products/ProductsContext'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import Error from '../Error/Error'

const ItemDetailContainer = () => {

    const {id} = useParams()
    const [product,setProduct] = useState({})
    const {getProductById,loading,error} = useContext(ProductsContext)
    const navigate = useNavigate()

    useEffect(()=>{
        (async ()=>{
            const product = await getProductById(id)
            setProduct(product)
        })()
    },[id])

    if(loading) return <LoadingSpinner/>
    if(error) return <Error 
    message="error al traer el producto"
    textButton="volver a cargar" 
    onRetry={()=>navigate(0)}
    />

  return (
    <div>
        <ItemDetail product={product}/>
    </div>
  )
}

export default ItemDetailContainer