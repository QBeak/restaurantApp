import React from 'react'
import Marquee from '../Marquee'
import OurPeople from '../Images/ourpeople1.jpg'
import './home.css'

const Home = () => {
  let contents = 'Behind every delicious, Soulfully prepared meal and at the forefront of every great customer experience stands a passionate and committed person. This is why “People Capability Always” is a driving force within our business and the golden thread that runs through everything we do. Read more';
  const cards = [
    {id:1, cardname:'Our People', Image:OurPeople, content:contents}
    
  ]
  return (
    <div>
      <div className='content'>
        <ul>
          <h2>Our Products</h2>
            <div className='list-flex'>

              <div className='list-main'>
                <li>Swallow</li>
                <li>Ofada Rice</li>
                <li>Bole</li>
              </div>
              <div className='list-main'>
                <li>African Salad</li>
                <li>Agidi</li>
                <li>Roasts and Grill</li>
              </div>
            </div>
            
        </ul>
        <ul>
          <h2>Our Services</h2>
            <div className='list-flex'>

              <div className='list-main'>
                <li>Home Delivery</li>
                <li>Reservation</li>
                <li>Catering Services</li>
              </div>
              
            </div>
        </ul>

    </div>
      <Marquee/>
      <div>
        <h4>Our People</h4>
        <div className='card-content'>
          {
            cards && cards.map((card)=>
            <div className='content-box'>
              <div className='image-box'><img src={card.Image} alt={card.cardname}/></div>
              <div className='text-box'>{card.content}</div>
            </div>
            )
          }
            
        </div>
      </div>
    </div>
  )
}

export default Home