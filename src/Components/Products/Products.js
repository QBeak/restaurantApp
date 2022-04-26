import React from 'react'
import './Products.css'
import JellofRice from '../Images/jellofrice.jpg'
import OfadafRice from '../Images/Ofada-rice.jpg'

const Products = () => {

  const foods = [
    {id:1, foodname: 'Jello Rice', image: JellofRice, price: 'NGN 800'},
    {id:2, foodname: 'Ofada Rice', image: OfadafRice, price: 'NGN 800'},
    {id:3, foodname: 'Jello Rice', image: JellofRice, price: 'NGN 800'},
    {id:4, foodname: 'Jello Rice', image: JellofRice, price: 'NGN 800'},
    {id:5, foodname: 'Jello Rice', image: JellofRice, price: 'NGN 800'},
    {id:6, foodname: 'Ofada Rice', image: OfadafRice, price: 'NGN 800'},
    {id:7, foodname: 'Jello Rice', image: JellofRice, price: 'NGN 800'},
    {id:8, foodname: 'Jello Rice', image: JellofRice, price: 'NGN 800'}
  ]
  return (
    <div>
      <div className='cards'>
        {
          foods && foods.map((food)=>
            <div className='card-box'>
             <img src={food.image} alt={food.foodname}/>
              <p>{food.foodname}
              {food.price}
              <button>Add to Cart</button>
              </p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Products