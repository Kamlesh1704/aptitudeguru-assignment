import React from 'react'
import './CourseCatalog.css'

export default function CourseCatalog() {
  return (
    <div className='catalogcontainer'>
      <h1 >Discover Our Course Catalog</h1>
      <p>Explore a wide range of courses designed to enhance your learning experience.</p>
      <div className='btn-div'>
        <button style={{backgroundColor:"#0B5FFF"}}>Learn More</button>
        <button className='contactbtn'>Contact us</button>
      </div>
    </div>
  )
}
