import React from 'react'
import {collection, getFirestore} from 'firebase/firestore'

const Order = () => {

    // Tiene que venir desde useContext (Carrito)
    const user = { name: 'Guillermo', phone: '0998837371', email: 'pepecuevas@gmail.com' } 

    const itemList = ['Iphone', 'Samsung']

    const putOrder = () => {

        const order = {
            buyer: user,
            items: itemList,
            total: 0
        }

        // console.log(order)
        const db = getFirestore()

    }
    
  return (
    <div>
        <h1 className='text-5xl'>Compra</h1>
        {itemList.map( (item, i) => <li key={i}>{item}</li> )}
        <button className='p-5 m-5 bg-slate-500 ' onClick={putOrder}>Comprar</button>
    </div>
  )
}

export default Order