import React from 'react'
import bigsquare from '../img/bigsquare.png'
import smallsquare from '../img/smallsquare.png'

import './Dashboard.css'


export default function Dashboard() {
  return (
    <div className='dashboard-container'>
      <div className='dash-1'>
        <h1 className='discover'>Discover the Power of <br/>Our Intuitive Course<br/> Dashboard</h1>
        <div className='dash-1-1'>
            <p className='with'>With our learning management system, you'll experience a<br/> user-friendly course dashboard that simplifies your learning 
                <br/>journey.
            </p>
            <div className='dash-1-1-1'>
                <div className='dash-card'>
                    <img src={smallsquare} alt="sqaure" className='ff'/>
                    <p className='simply'>Simplified Learning</p>
                    <p className='access'>Access all your courses,<br/>assignments, and resources in one<br/>
                         convenient location.
                    </p>
                </div>
                <div className='dash-card'>
                <img src={smallsquare} alt="square" className='ff'/>
                    <p className='simply'>Simplified Learning</p>
                    <p className='access'>Access all your courses,<br/>assignments, and resources in one<br/>
                         convenient location.
                    </p>
                </div>
            </div>
        </div>
      </div>
        <img src={bigsquare} alt="square" className='big-square'/>
    </div>
  )
}
