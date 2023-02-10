import React from 'react'
import cuisines from '../data/cuisines.json'
import Twemoji from 'react-twemoji'
import Bubble from './Bubble'

const CuisinesOptions = () => {
  return (
    <ul className='Bubble-list'>
        {cuisines.map(cuisine => 
            <Bubble name={cuisine.name} icon={cuisine.emoji}/>
        )}
    </ul>
  )
}

export default CuisinesOptions