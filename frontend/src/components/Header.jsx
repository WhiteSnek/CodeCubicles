import React from 'react'
import { NavLink } from 'react-router-dom'
// React icons imports
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from 'react-icons';
import { FaRegHeart } from "react-icons/fa";

const Header = () => {
  return (
    <header className='sticky z-50 shadow top-0 px-4 sm:px-10 py-2 w-screen bg-white flex justify-between items-center'>
      <NavLink to='/' className='font-bold text-lg sm:text-3xl'>
        Vastra<span className='text-pink-400'>Agaya</span>
      </NavLink>
      <nav className='hidden sm:flex justify-center text-md sm:text-lg font-normal sm:font-medium items-center gap-8 '>
        <NavLink to='/men' className={({isActive})=> `block   hover:text-red-800 ${isActive? "text-red-800": ""}`}>
            Men
        </NavLink>
        <NavLink to='/women' className={({isActive})=> `block   hover:text-red-800 ${isActive? "text-red-800": ""}`}>
            Women
        </NavLink>
        <NavLink to='/kids' className={({isActive})=> `block hover:text-red-800 ${isActive? "text-red-800": ""}`}>
            Kids
        </NavLink>
        <NavLink to='/favorites' className={({isActive})=> `block hover:text-red-800 ${isActive? "text-red-800": ""}`}>
        <IconContext.Provider value={{ size: "17px" }}>
        <FaRegHeart />
    </IconContext.Provider>
        </NavLink>
      </nav>
      <div className='flex gap-3'>

      
    <NavLink to='/login' className={({isActive})=> `block  text-white px-4 py-2 rounded-md sm:text-lg hover:bg-red-700 ${isActive? "bg-red-700": "bg-red-800"}`}>
            Login
    </NavLink>
    <button className='sm:hidden block'>
    <IconContext.Provider value={{ size: "25px" }}>
        <GiHamburgerMenu />
    </IconContext.Provider>
    </button>
    </div>
    </header>
  )
}

export default Header
