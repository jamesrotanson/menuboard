import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import RecipeCard from '../components/RecipeCard';
import RecipeModal from './RecipeModal';
import IngredientItem from './IngredientItem';


const UnscheduledSidebar = () => {

    const unscheduledRecipeList = useSelector((state) => state.recipe.unscheduledRecipeList)
    
    const [showRecipeModal, setShowRecipeModal] = useState(false)
    const [activeRecipe, setActiveRecipe] = useState([])

    const handleRecipeModalOpen = (recipe) => {
      setShowRecipeModal(true)
      setActiveRecipe(recipe)
    }

    const handleRecipeModalClose = () => {
      setShowRecipeModal(false)
    }

    return (
      <div className='Plan-sidebar'>
          <h3>Unscheduled meals</h3>
          <ul>
            {unscheduledRecipeList && unscheduledRecipeList.length > 0
            ?
            unscheduledRecipeList.map((recipe) => {
                return(
                <RecipeCard 
                    key={recipe.id}
                    name={recipe.name}
                    imageUrl={recipe.imageUrl}
                    cost={recipe.cost}
                    time={recipe.time}
                    onClick={() => handleRecipeModalOpen(recipe)}
                />
            )
            })
            :
            "No meals found. Add meals from recipe."
            }
          </ul>

          {showRecipeModal && 
            <RecipeModal
              onOk={handleRecipeModalClose}
              onCancel={handleRecipeModalClose}
              name={activeRecipe.name}
              imageUrl={activeRecipe.imageUrl}
              cost={activeRecipe.cost}
              time={activeRecipe.time}
              difficulty={activeRecipe.difficulty}
              cuisine={activeRecipe.cuisine}
              
              // steps={
              //   <ol>
              //       {activeRecipe.steps.map((step, i) => (
              //           <li key={i}>{step}</li>
              //       ))}
              //   </ol>
              // }
            />
          }
      </div>
  )
}

export default UnscheduledSidebar