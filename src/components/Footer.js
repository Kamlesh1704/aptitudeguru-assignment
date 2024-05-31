import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import logo from '../img/logo.png'
import './Footer.css'

export default function Footer() {
  return (
    <div className='conta'>
      <div className='div-container'>
        <div className='containe-link'>
          <img src={logo} alt="" />
          <p className='follow'>Follow us</p>
          <div className='icon-cont'>
          <FaFacebookF className='ic'/>
          <FaLinkedinIn className='ic'/>
          <FaInstagram className='ic'/>
          <FiYoutube className='ic'/>
          </div>
        </div>
        <div className='containe-link'>
          <h1 className='two h'>Help</h1>
          <p>Support</p>
          <p className='tem'>condition
          </p>
          <p className='tem'>Policy</p>
        </div>
        <div className='containe-link'>
          <h1 className='two'>Quick Links</h1>
          <p>Home</p>
          <p>About</p>
          <p>Contact us</p>
          <p>Features</p>
        </div>
        <div className='containe-link dis'>
          <h1 className='twoo n'>Newsletter</h1>
          <input className='input'/>
          <button className='subs'>Subscribe</button>
        </div>
      </div>
      <div className='didd'>
          <h1 className='twoo n'>Newsletter</h1>
          <input className='inputt'/>
          <button className='subss'>Subscribe</button>
        </div>
      <div className='hrr'></div>
      <p className='rigth'>2024 All rights are Reserved </p>
    </div>
  )
}
