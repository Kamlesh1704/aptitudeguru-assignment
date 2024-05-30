import React from 'react'
import Navbar from './Navbar'
import Result from './Result'
import Features from './Features'
import spiral from '../img/spiral.png'
import starr from '../img/starr.png'
import girl from '../img/girl.png'
import './Home.css'
import Dashboard from './Dashboard'
import Support from './Support'
import CourseCatalog from './CourseCatalog'
import Stories from './Stories'
import Faq from './Faq'
import Footer from './Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='container-2'>
          <img src={spiral} alt="spiral" className='spiral'/>
          <div className='content'>
            <h1>UNLOCK YOUR POTENTIAL WITH <span className='span-1'>AGH</span> <span className='span-2'>LMS</span></h1>
            <p className='parasuccess'>Your Path to Success</p>
            <p className='welcomepara'>Welcome to AGH LMS, your ultimate learning companion! 
              We're<br/> delighted to have you embark 
              on this journey of knowledge and<br/> growth with us</p>
            <button className='startbtn'>Start your Journey</button>
          </div>
          <img src={starr} alt="star" className='star'/>
      </div>
      <div className='container-3'>
        <div className='content-2'>
          <h1>Empower Your Learning Journey with <br/>Personalized Courses and Expert <br/>Support</h1>
          <p>AGH LMS is dedicated to providing exceptional <br/>learning experiences tailored to your individual
              <br/>needs 
          </p>
          <p>Our platform offers personalized learning <br/>paths, expert support, and a vast library of <br/>
              courses to help you achieve your goals. needs.
          </p>
        </div>
        <div className='girl-container'>
          <img src={girl} alt="girl" className='girlimg' />
        </div>
        <img src={girl} alt="girl" className='girlimgmobile' />
      </div>
      <Result />
      <Features />
      <Dashboard />
      <Support />
      <CourseCatalog />
      <Stories />
      <Faq />
      <Footer />
    </>
  )
}
