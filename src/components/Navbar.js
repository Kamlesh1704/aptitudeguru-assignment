import React from 'react'
import logo from '../img/logo.png'
import { IoIosArrowDown } from "react-icons/io";
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import { RxCross2 } from "react-icons/rx";
import { IoIosLogIn } from "react-icons/io";
import { FiThermometer, FiUserPlus } from "react-icons/fi";
import { IoReorderThreeSharp } from "react-icons/io5";
import './Navbar.css'

export default function Navbar() {
  return (
    <>
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
    </nav>
    <nav className='navbar-container-mobile'>
    <img src={logo} alt="logo" className='logo'/>
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button className="trigger-button" type="button">
            <IoReorderThreeSharp />
          </button>
        }
      >
        {close => (
          <div >
                 <button
           type="button"
           className="trigger-button cross"
           onClick={() => close()}
          >
            <RxCross2 />
          </button>
            <div className='popucont'>
              <p>Home</p>
              <p>Leader Board</p>
              <p>Test</p>
              <p>Test by College</p>
              <p>Login In</p>
              <p>Sign Up</p>
            </div>
        </div>
     )}
      </Popup>
    </div>
    </nav>
    </>
  )
}
