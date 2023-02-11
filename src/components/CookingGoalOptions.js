import React from 'react'
import Bubble from './Bubble'
import cookingGoals from "../data/cookingGoal.json"

const CookingGoalOptions = () => {
  return (
    <ul className='Bubble-list'>
        {cookingGoals.map(cookingGoal => 
            <Bubble name={cookingGoal.name} icon={cookingGoal.emoji}/>
        )}
    </ul>
  )
}

export default CookingGoalOptions