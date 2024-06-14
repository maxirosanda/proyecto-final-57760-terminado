import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import { useLocation } from 'react-router-dom'
import useCategories from '../../hooks/useCategories'
import ProductsContext from '../../context/products/ProductsContext'

const Navbar = () => {

  const {categories} = useCategories()
  const {handleCategorySelected} = useContext(ProductsContext)
  const location = useLocation()

  return (
    <nav>
        <Link to="/">Productos</Link>
        <Link to="/cart"><CartWidget/></Link>
        <Link to="/orders">Ordenes</Link>
        {location.pathname ==="/" && (
          <select  onChange={(e)=> handleCategorySelected(e.target.value)}>
            {categories.map(category => <option selected={category.title === "Todos"} key={category.id} value={category.title}>
                                          {category.title}
                                        </option> 
            )}
          </select>
        )}
        
          
    </nav>
  )
}

export default Navbar