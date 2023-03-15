import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import RecipeCard from '../components/RecipeCard';
import RecipeModal from './RecipeModal';
import IngredientItem from './IngredientItem';
import SearchBar from './SearchBar';
import { X } from 'phosphor-react';
import Button from './Button';


const UnscheduledSidebar = (props) => {

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

    const [searchTerm, setSearchTerm] = useState("")
    const handleSearch = (event) => {
      setSearchTerm(event.target.value)
    }

    const filteredUnscheduledRecipeList = unscheduledRecipeList.filter((recipe) => 
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
      <>
      {props.visible && 
        <div className='Plan-sidebar'>
            <div className='Page-title'>
              <h3 class="flex-grow">Unscheduled meals</h3>
              <Button appearance="default Button-icon" iconBefore={<X/>} onClick={props.closeSidebar}/>
            </div>
            <SearchBar placeholder="Search recipes" onChange={handleSearch} appearance="default"/> 
            <ul>
              {filteredUnscheduledRecipeList && unscheduledRecipeList.length > 0
              ?
              filteredUnscheduledRecipeList.map((recipe) => {
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
        }
      </>
  )
}

export default UnscheduledSidebar