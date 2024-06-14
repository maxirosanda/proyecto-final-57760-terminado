import React  from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import { useLocation } from 'react-router-dom'
import useCategories from '../../hooks/useCategories'
import Select from '../Select/CustomSelect'
import './Navbar.css'
import CustomSelect from '../Select/CustomSelect'


const Navbar = () => {

  const {categories} = useCategories()
  const location = useLocation()

  return (
    <>
           <nav className="navbar">
            <div className='links'>
              <Link className='link' to="/">Productos</Link>
              <Link className='link' to="/orders">Ordenes</Link>
              <Link className='link'  to="/cart"><CartWidget/></Link>
            </div>      
          </nav>
         
            {location.pathname ==="/" && (
                         <div className='selectContainer'>
                            <CustomSelect categories={categories}/>
                          </div>
                      )}

    </>
 
  )
}

export default Navbar