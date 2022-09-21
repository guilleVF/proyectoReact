import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <>
        <div className='navbar flex justify-between fixed h-20 px-10 w-full bg-neutral-300 shadow-md'>
            <img src={require("../assets/img/logo3.png")} alt="" 
            className='h-full p-2'/>
            <div className='navRight'>
                <CartWidget></CartWidget>
            </div>
        </div>
    </>
  )
}

export default NavBar
