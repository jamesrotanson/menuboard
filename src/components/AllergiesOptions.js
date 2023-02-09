import React from 'react'
import allergies from '../data/allergies.json'
import Button from './Button'
import Twemoji from 'react-twemoji'

const AllergiesOptions = () => {
  return (
    
        <ul className='Bubble-list'>
            {allergies.map(allergy => 
                <li className="Bubble-option">
                    <Twemoji options={{ className: 'Twemoji-small' }}>
                        <p>{allergy.icon}</p>
                    </Twemoji>
                    <h5>{allergy.name}</h5>
                </li>
            )}
        </ul>
        
  )
}

export default AllergiesOptions