import React from 'react'

const ProductCard = (props) => {

  return (
    <>
        <div className='productCard py-10 max-w-md flex-col text-center shadow-xl shadow-gray-300 m-3 rounded'>
            <div className='productCardImg w-full px-28 py-10'>
                <img src={require(`../assets/img/productos/${props.id}.png`)} alt="" 
                className=''/>
            </div>
            <div className='productCardText'>
                <div className='productTitle px-2 py-3 text-xl font-bold'>
                    <h2>{props.name}</h2>
                </div>
                <div className='productDescription px-4 py-1 text-md'>
                    <p>{props.description}</p>
                </div>
                <div className='productPrice px-2 py-3 text-lg font-medium'>
                    <p>US$ {props.price}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductCard