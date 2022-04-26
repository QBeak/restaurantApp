import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Marquee = () => {
  return (
    <div>
      <div><h2><Link to='/products'><button>Order Now</button></Link></h2></div>
        <div className='marquee'>
          
         <ul className='marquee-elements'>
            <li><img src='/food1.jpg'/></li>
            <li><img src='/food2.jpg'/></li>
            <li><img src='/food4.jpg'/></li>
            <li><img src='/food5.jpg'/></li>
            <li><img src='/food6.jpg'/></li>
            <li><img src='/food7.jpg'/></li>
            <li><img src='/food1.jpg'/></li>
            <li><img src='/food2.jpg'/></li>
            <li><img src='/food4.jpg'/></li>
            <li><img src='/food5.jpg'/></li>
            <li><img src='/food6.jpg'/></li>
            <li><img src='/food7.jpg'/></li>
         </ul>

        </div>
        
      </div>
  )
}

export default Marquee