import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import NavBar from './NavBar'
import { collection, doc, getDoc, getFirestore } from 'firebase/firestore'


const ProductDetail = () => {

    
    const {id} = useParams()

    const [counter, setCounter] = useState(0)

    const [product, setProduct] = useState()

    const [loading, setLoading] = useState(true)

    useEffect(() => {
      getProduct()
    }, [])

    const getProduct = () => { 
      const db = getFirestore()
      const productsCollection = collection(db, 'productos') 
      const docRef = doc( productsCollection, id)   
      getDoc(docRef).then ( res => {
        console.log(res.data())
        setProduct(res.data())
        setLoading(false)
      })  
    }


return (
    <>
        <header>
            <NavBar></NavBar>
        </header>
        {loading ? <h1 className='m-auto py-52 text-xl'>Cargando...</h1>:
        <div className='productCard py-20 max-w-md flex-col text-center shadow-xl shadow-gray-300 rounded-lg m-auto'>
        <div className='productCardImg w-full px-28 py-10'>
            <img src={product.img} alt="" 
            className=''/>
        </div>
        <div className='productCardText'>
            <div className='productTitle px-2 py-3 text-xl font-bold'>
                <h2>{product.name}</h2>
            </div>
            <div className='productDescription px-4 py-1 text-md'>
                <p>{product.description}</p>
            </div>
            <div className='productPrice px-2 py-3 text-lg font-medium'>
                <p>US$ {product.price}</p>
            </div>
            <Link to={''} className='btn block my-7 py-3 px-7 rounded-lg bg-slate-600 shadow-md w-1/2 m-auto'><p className='font-semibold text-slate-100'>Agregar al carrito</p></Link>
            <p className='text-xl inline px-2 py-1 border-solid border-2 border-grey'>{counter}</p>
            <div className='flex justify-center'>
                <button className='text-xl rounded-lg inline px-2' onClick={ () => setCounter(counter + 1)}>+</button>
                <button className='text-xl rounded-lg inline px-2' onClick={ () => setCounter(counter - 1)}>-</button>
            </div>
        </div>
    </div>
        }
    </>
  )
}

export default ProductDetail