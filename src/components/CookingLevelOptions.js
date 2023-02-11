import React from 'react'
import { Knife, ForkKnife, CookingPot } from 'phosphor-react'
import cookingLevels from "../data/cookingLevel.json"
import Bubble from './Bubble'

const CookingLevelOptions = () => {
  return (
    <ul className='Bubble-list'>
        {cookingLevels.map(cookingLevel => 
            <Bubble name={cookingLevel.name} icon={cookingLevel.icon}/>
        )}
    </ul>
  )
}

export default CookingLevelOptions