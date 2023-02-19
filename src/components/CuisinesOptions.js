import React from 'react'
import cuisines from '../data/cuisines.json'
import Twemoji from 'react-twemoji'
import Bubble from './Bubble'

const CuisinesOptions = () => {
  return (
    <div className='Bubble-list'>
        {cuisines.map(cuisine => 
            <Bubble key={cuisine.id} name={cuisine.name} icon={cuisine.emoji}/>
        )}
    </div>
  )
}

export default CuisinesOptions