import React, {useState} from 'react'
import diets from '../data/diet.json'
import Twemoji from 'react-twemoji'
import Bubble from './Bubble'

const DietOptions = () => {
    return (
    <ul className="Bubble-list">
        {diets.map(diet => 
            <Bubble key={diet.id} name={diet.name} icon={diet.emoji}/>
        )}
    </ul>
  )
}

export default DietOptions