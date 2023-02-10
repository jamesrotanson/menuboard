import React from 'react'
import cuisines from '../data/cuisines.json'
import Twemoji from 'react-twemoji'

const CuisinesOptions = () => {
  return (
    <ul className='Bubble-list'>
        {cuisines.map(cuisine => 
            <li className='Bubble-option'>
                <Twemoji options={{className: "Twemoji-small"}}>
                    <p>{cuisine.emoji}</p>
                </Twemoji>
                <h5>{cuisine.name}</h5>
            </li>
        )}
    </ul>
  )
}

export default CuisinesOptions