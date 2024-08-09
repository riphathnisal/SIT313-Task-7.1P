import React from 'react'
import './Bar.css';

function Bar() {
  return (
    <div className='bar'>
    <div className='bar-container'>
    <div className="bar-logo">SIGN UP FOR OUR DAILY INSIDER</div>
        <input className="bar-search" type="text" placeholder="Enter Your Email..." />
        
      <button className="button-new">Subscribe</button>
    
    </div>
      
    </div>
  )
}

export default Bar
