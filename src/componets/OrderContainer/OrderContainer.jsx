import React ,{useState,useEffect} from 'react'
import { collection,getDocs,getFirestore } from 'firebase/firestore'
import './OrderContainer.css'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import Error from '../Error/Error'
import { useNavigate } from 'react-router-dom'

const OrderContainer = () => {

    const [orders,setOrders] = useState([])
    const [loading,setLoading] =useState(true)
    const [error,setError] = useState(null)
    const navigate = useNavigate()

    useEffect(()=>{
        (async ()=>{
            try {
            setLoading(true)
            const db = getFirestore()
            const docsRef = collection(db,"orders")
            const querySnapshop = await getDocs(docsRef)
            setOrders(querySnapshop.docs.map(doc => ({id:doc.id,...doc.data()})))
            setLoading(false)
            } catch (error) {
              setError(error)
              setLoading(false)
            }
        })()
    },[])

    if(loading) return <LoadingSpinner/>
    if(error) return <Error 
      message="error al traer las ordenes"
      textButton="volver a cargar" 
      onRetry={()=>navigate(0)}
    />

  return (
    <div className='orderContainer'>
        {orders.map(order => <div className='order' key={order.id}><p>Numero de orden: {order.id}</p></div>)}
    </div>
  )
}

export default OrderContainer