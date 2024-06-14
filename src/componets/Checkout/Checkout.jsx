import React, {useState} from 'react'

const Checkout = ({completeOrder}) => {

    const [nameBuyer,setNameBuyer] = useState("")
    const [telBuyer,setTelBuyer] = useState("")
    const [emailBuyer,setEmailBuyer] = useState("")

    const handleCompleteOrder = () => {

        const buyer = {
            name:nameBuyer,
            tel:telBuyer,
            email:emailBuyer
        }

        completeOrder(buyer)
    }
  return (
    <div>
        <input type="text" value={nameBuyer} onChange={(e)=>setNameBuyer(e.target.value)} placeholder='ingrese su nombre y apellido' />
        <input type="text" value={telBuyer} onChange={(e)=>setTelBuyer(e.target.value)} placeholder='ingrese su telefono' />
        <input type="text" value={emailBuyer} onChange={(e)=>setEmailBuyer(e.target.value)} placeholder='ingrese su email' />
        <button onClick={handleCompleteOrder}>Finalizar Compra</button>
    </div>
  )
}

export default Checkout