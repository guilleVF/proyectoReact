import React from 'react'
import CartWidget from './CartWidget'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {link} from 'react-router-dom'  


const NavBar = () => {
  return (
    <>
        <div className='navbar flex justify-between fixed h-20 px-10 w-full bg-neutral-500 bg-opacity-90 shadow-md'>
            <Link to={'/'}>
              <img src={require("../assets/img/logo3.png")} alt="" 
              className='h-full p-2'/>
            </Link>
            <div className='navRight flex justify-end'>
                <CartWidget></CartWidget>
            </div>
        </div>
    </>
  )
}

export default NavBar
