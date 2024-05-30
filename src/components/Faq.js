import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import './Faq.css'

export default function Faq() {
  return (
    <div className='quecontainer'>
      <h1 className='faheading'>FAQ's</h1>
      <div className='question-container'>
        <div className='question-card'>
            <div className='one'>
                <p>What is Citizenship by Investment?</p>
                <RxCross2 style={{color:"#427EF3"}}/>
            </div>
            <p className='pp'>Citizenship by Investment (CBI) is a process where individuals can gain citizenship by <br/>
            investing in a country. The process involves applying to a government-approved program, <br/>
            undergoing a background check, and, if approved, making an economic contribution and <br/>
            receiving citizenship. The specifics of CBI programs vary by country.
            </p>
        </div>
        <div className='question-card-2'>
                <p>Can I get a new passport and keep my current one?</p>
                <FaPlus style={{color:"#427EF3"}}/> 
        </div>
        <div className='question-card-2'>
                <p>Can I get a new passport and keep my current one?</p>
                <FaPlus style={{color:"#427EF3"}}/> 
        </div>
        <div className='question-card-2'>
                <p>Can I get a new passport and keep my current one?</p>
                <FaPlus style={{color:"#427EF3"}}/> 
        </div>
        <div className='question-card-2'>
                <p>Can I get a new passport and keep my current one?</p>
                <FaPlus style={{color:"#427EF3"}}/> 
        </div>
      </div>
    </div>
  )
}
