import React, { useContext } from 'react'
import ItemList from '../ItemList/ItemList'
import ProductsContext from '../../context/products/ProductsContext'

const ItemListContainer = () => {

    const {products} = useContext(ProductsContext)

    
  return (
    <div>
        {products.map(product => <ItemList key={product.id} product={product}/>)}
    </div>
  )
}

export default ItemListContainer