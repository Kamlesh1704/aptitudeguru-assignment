import './Result.css'

import React from 'react'

export default function Result() {
  return (
    <div className='result-container'>
        <h1 className='result-heading'>Our results in numbers</h1>
        <div className='card-container'>
            <div className='card'>
                <h1>99<span style={{color:"#4182FF"}}>%</span></h1>
                <p>Lorem ipsum dolor sit amet <br/>consectetur adipiscing.</p>
            </div>
            <div className='card'>
                <h1>99<span style={{color:"#4182FF"}}>M</span></h1>
                <p>Lorem ipsum dolor sit amet <br/>consectetur adipiscing.</p></div>
            <div className='card'>
                <h1>99<span style={{color:"#4182FF"}}>+</span></h1>
                <p>Lorem ipsum dolor sit amet<br/> consectetur adipiscing.</p></div>
            <div className='card'>
                <h1>99<span style={{color:"#4182FF"}}>%</span></h1>
                <p>Lorem ipsum dolor sit amet <br/>consectetur adipiscing.</p></div>
        </div>
    </div>
  )
}
