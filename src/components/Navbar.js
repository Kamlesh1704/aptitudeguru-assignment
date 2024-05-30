import React from 'react'
import logo from '../img/logo.png'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosLogIn } from "react-icons/io";
import { FiUserPlus } from "react-icons/fi";
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className='navbar-container'>
      <img src={logo} alt="logo" className='logo'/>
      <div className='para-container'>
        <p>Home</p>
        <p>Leader Board</p>
        <div>
          <p>Test</p>
          <IoIosArrowDown/>
        </div>
        <div>
          <p>Test by College</p>
          <IoIosArrowDown/>
        </div>
      </div>
      <div className='button-container'>
        <button className='login'>Login In</button>
        <button className='sign'>Sign Up</button>
      </div>
      <div className='button-container-mobile'>
        <button className='login b'><IoIosLogIn/></button>
        <button className='sign'><FiUserPlus/></button>
      </div>
    </nav>
  )
}
