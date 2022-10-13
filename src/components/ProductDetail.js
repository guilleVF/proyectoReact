import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { json, useParams } from 'react-router-dom'
import ListaProductos from './ListaProductos'
import {Link} from 'react-router-dom'
import NavBar from './NavBar'

const ProductDetail = () => {

    const {id} = useParams()

    const [data, setData] = useState({})
    
    useEffect(() => {
      getData()
    }, [])

    

    const getData = async() => {
        
        const URL = '../listaProductos.json'
        const fetch = await axios.get(URL).then((response) => response.data)
        setData(fetch[id])
    }

    console.log(JSON.stringify(data.id))

return (
    <>
        <header>
            <NavBar></NavBar>
        </header>
        <div className='productCard py-10 max-w-md flex-col text-center shadow-xl shadow-gray-300 rounded-lg m-auto'>
            <div className='productCardImg w-full px-28 py-10'>
                <img src={require(`../assets/img/productos/${id}.png`)} alt="" 
                className=''/>
            </div>
            <div className='productCardText'>
                <div className='productTitle px-2 py-3 text-xl font-bold'>
                    <h2>{data.name}</h2>
                </div>
                <div className='productDescription px-4 py-1 text-md'>
                    <p>{data.description}</p>
                </div>
                <div className='productPrice px-2 py-3 text-lg font-medium'>
                    <p>US$ {data.price}</p>
                </div>
                <Link to={`/tienda/${id}`} className='btn inline-block my-2 py-3 px-7 rounded-lg bg-slate-600 shadow-md'><p className='font-semibold text-slate-100'>Agregar al carrito</p></Link>
            </div>
        </div>
    </>
  )
}

export default ProductDetail