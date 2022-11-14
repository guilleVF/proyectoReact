import React from 'react'
import {Link, useParams} from 'react-router-dom'

const ProductCard = (props) => {

    console.log(props.id)

  return (
    <>
        <div className='productCard py-10 max-w-md flex-col text-center shadow-xl shadow-gray-300 m-3 rounded-lg'>
            <div className='productCardImg w-full px-28 py-10'>
                <img src={props.img} alt="" 
                className=''/>
            </div>
            <div className='productCardText'>
                <div className='productTitle px-2 py-3 text-xl font-bold'>
                    <h2>{props.name}</h2>
                </div>
                {/* <div className='productDescription px-4 py-1 text-md'>
                    <p>{props.description}</p>
                </div> */}
                <div className='productPrice px-2 py-3 text-lg font-medium'>
                    <p>US$ {props.price}</p>
                </div>
                <Link to={`/tienda/${props.id}`} state='hola' className='btn inline-block my-2 py-3 px-7 rounded-lg bg-slate-600 shadow-md'><p className='font-semibold text-slate-100'>Ver detalles</p></Link>
            </div>
        </div>
    </>
  )
}

export default ProductCard