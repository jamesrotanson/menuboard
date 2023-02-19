import React from 'react'
import Bubble from './Bubble'
import foodsAvoid from '../data/foodAvoid.json'

const FoodAvoidOptions = () => {
  return (
    <ul className='Bubble-list'>
        {foodsAvoid.map(foodAvoid => 
            <Bubble key={foodAvoid.id} name={foodAvoid.name} icon={foodAvoid.icon}/>
        )}
    </ul>
  )
}

export default FoodAvoidOptions