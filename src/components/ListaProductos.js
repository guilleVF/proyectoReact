import React from 'react'
import ProductCard from './ProductCard'

const ListaProductos = () => {

    let arrayProductos = [
        {name:"Casco LS2 Carbon",
        description:"Casco de fibra de carbono diseñado para ruta",
        price:"570",
        id:"0"},
        {name:"Casco LS2 Arrow",
        description:"Casco de alto rendimiento para pilotos",
        price:"440",
        id:"1"},
        {name:"Casco LS2 Pioneer",
        description:"Casco de competición ultra liviano",
        price:"480",
        id:"2"},
        {name:"Casco LS2 X-FORCE",
        description:"Casco de cross en fibra de carbono",
        price:"500",
        id:"3"}
    ]

  return (
    <div className='listaProductos flex max-w-full flex-wrap justify-center'>
        {arrayProductos.map(element => {
                    return <ProductCard name={element.name} description={element.description} price={element.price} id={element.id}></ProductCard>
        })}
    </div>
  )
}

export default ListaProductos