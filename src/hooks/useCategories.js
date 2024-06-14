import { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const useCategories = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const db = getFirestore()
        const docsRef = collection(db, "categories")
        const querySnapshot = await getDocs(docsRef)
        setCategories(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  return { categories, loading, error }
}

export default useCategories