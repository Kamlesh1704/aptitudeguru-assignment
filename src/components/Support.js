import React from 'react'
import starr from '../img/starr.png'
import spiral2 from '../img/spiral2.png'
import smallsquare from '../img/smallsquare.png'

import './Support.css'

export default function Support() {
  return (
    <div className='support-container'>
        <div className='support1'>
            <img src={starr} alt="star" className='support-star'/>
            <div className='support1-1'>
                <h1>Heading about Support</h1>
                <p className='designp'>Designing a web page for a student to take objective-type tests requires a<br/>
                     user-friendly interface that is intuitive and focused on the test-taking<br/>
                      experience ?
                </p>
                <div className='support1-1-1'>
                    <p className='p1'>Students</p>
                    <p className='p2'>College Partners</p>
                </div>
            </div>
            <img src={spiral2} alt="spiral" className='spiral2'/>
        </div>
        <div className='supportcardcontainer'>
            <div className='support-card' style={{backgroundColor:"#E5F8E7"}}>
                <h1>Placement </h1>
                <p>web page for a student to take objective <br/>student to take objective</p>
                <div className='img-div'>
                    <img src={smallsquare} alt="" className='img-1'/>
                </div>
            </div>
            <div className='support-card' style={{backgroundColor:"#D3ECFE"}}>
                <h1>Placement </h1>
                <p>web page for a student to take objective <br/>student to take objective</p>
                <div className='img-div'>
                    <img src={smallsquare} alt="" className='img-1'/>
                </div>               
            </div>
            <div className='support-card' style={{backgroundColor:"#FFE0E7"}}>
                <h1>Placement </h1>
                <p>web page for a student to take objective <br/>student to take objective</p>
                <div className='img-div'>
                    <img src={smallsquare} alt="" className='img-1'/>
                </div>          
            </div>
        </div>
    </div>
  )
}
