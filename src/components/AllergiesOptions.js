import React from 'react'
import allergies from '../data/allergies.json'
import Twemoji from 'react-twemoji'
import Bubble from './Bubble'


const AllergiesOptions = () => {
  return (
        <ul className='Bubble-list'>
            {allergies.map(allergy => 
                <Bubble key={allergy.id} name={allergy.name} icon={allergy.icon}/>
            )}
        </ul>
        
  )
}

export default AllergiesOptions