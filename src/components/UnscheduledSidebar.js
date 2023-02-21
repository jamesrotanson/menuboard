import React from 'react'
import { useSelector } from 'react-redux';
import RecipeCard from '../components/RecipeCard';


const UnscheduledSidebar = () => {

    const unscheduledRecipeList = useSelector((state) => state.recipe.unscheduledRecipeList)
    

  return (
    <div className='Plan-sidebar'>
        <h3>Unscheduled meals</h3>
        {unscheduledRecipeList && unscheduledRecipeList.length > 0
        ?
        unscheduledRecipeList.map((recipe) => {
            return(
            // <div>{recipe.recipeName}</div>
            <RecipeCard 
                key={recipe.id}
                name={recipe.name}
                imageUrl={recipe.imageUrl}
                cost={recipe.cost}
                time={recipe.time}
            />
        )
        })
        :
        "No meals found. Add meals from recipe."
        }
    </div>
  )
}

export default UnscheduledSidebar