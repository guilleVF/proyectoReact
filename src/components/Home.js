import React from 'react'
import ItemListContainer from './ItemListContainer'
import ListaProductos from './ListaProductos'
import NavBar from './NavBar'

const Home = () => {
  return (
    <div>        
        <header>
            <NavBar></NavBar>
        </header>
        <ItemListContainer greeting="Bienvenido a Montevideo Wrapping"></ItemListContainer>
        <ListaProductos></ListaProductos>
    </div>
  )
}

export default Home