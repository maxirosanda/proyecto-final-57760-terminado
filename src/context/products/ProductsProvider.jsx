import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore, query, where, doc, getDoc } from 'firebase/firestore'
import ProductsContext from "./ProductsContext"

const ProductsProvider = ({children}) => {
    
    const [products, setProducts] = useState([])
    const [categorySelected,setCategorySelected] = useState("Todos") 
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const handleCategorySelected = (value) => {
        setCategorySelected(value)
      }

    useEffect(() => {

        (async () => {
          try {
            const db = getFirestore()
            const docsRef = collection(db, "products")
            if(categorySelected === "Todos"){
              const querySnapshot = await getDocs(docsRef)
              setProducts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
            }else{
              const q = query(docsRef, where("category","==",categorySelected))
              const querySnapshot = await getDocs(q)
              setProducts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
            }
           
            setLoading(false)
          } catch (error) {
            setError(error)
            setLoading(false)
          }
        })()
    
      }, [categorySelected])
    
      const getProductById = async (id) => {
        try {
            const db = getFirestore()
            const docRef = doc(db, "products", id)
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()) {
                return { id: docSnap.id, ...docSnap.data() }
            } else {
                throw new Error("Product not found")
            }
        } catch (error) {
            setError(error)
            setLoading(false)
            throw error
        }
    };

  return (
    <ProductsContext.Provider value={{products,handleCategorySelected, getProductById}}>
        {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider