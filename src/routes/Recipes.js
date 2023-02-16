import React, {useState} from 'react'
import LoadingPage from './LoadingPage'
import Button from '../components/Button'
import { NotePencil } from 'phosphor-react'
import SearchBar from '../components/SearchBar'
import RecipeCard from '../components/RecipeCard'
import RecipesData from '../data/recipes.json'
import RecipeModal from '../components/RecipeModal'


const Recipes = () => {

    // LOADING
    const [loading, setLoading] = useState(true)
    setTimeout(() => setLoading(false), 1000);



    // SEARCH
    const [searchTerm, setsearchTerm] = useState("")
    const handleSearch = (event) => {
        setsearchTerm(event.target.value)
    }

    const filteredRecipes = RecipesData.filter((recipe) => 
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // OPEN MODAL
    const [showRecipeModal, setShowRecipeModal] = useState(false)
    const [activeRecipe, setActiveRecipe] = useState({});

    const handleRecipeModalOpen = (recipe) => {
        setShowRecipeModal(true)
        setActiveRecipe(recipe)
        console.log(recipe.ingredients)
    }

    const handleRecipeModalCancel = () => {
        setShowRecipeModal(false)
    }

    // const handleDeleteRecipe = (id) => {
    //     setRecipes(recipes.filter((recipe) => recipe.id !== id));
    // };

    const handleDeleteRecipe = (id) => {RecipesData.filter((recipe) => recipe.id !== id)}

  return (
    <div>
        {loading ? <LoadingPage/> : 
        <div className="Page-container">
            <div className="Page-small">


                <br></br>
                <div className="Page-header">
                    <div className="Page-title">
                    <div>
                        <h2>Recipes</h2>
                        <p>Discover tasty recipes designed to suit your taste, preferences, allergies, body condition, and habits.</p>
                    </div>
                    </div>
                    <Button appearance="primary" name="New recipe" iconBefore={<NotePencil/>} />
                    {/* <button onClick={() => setShowModal(true)} className="Button-primary"><NotePencil size={24}/>New recipe</button> */}
                </div>

                <SearchBar placeholder="Search recipes and ingredients" onChange={handleSearch} appearance="default"/> 

                <ul className='Recipe-card-list'>
                    {
                        filteredRecipes.map((recipe) => {
                            return(
                                <RecipeCard 
                                    key={recipe.id}
                                    name={recipe.name}
                                    imageUrl={recipe.imageUrl}
                                    cost={recipe.cost}
                                    time={recipe.time}
                                    onClick={() => handleRecipeModalOpen(recipe)}
                                    onDelete={() => handleDeleteRecipe(recipe.id)}
                                />
                            )
                        })
                    }
                </ul>

                {showRecipeModal ? 
                    <RecipeModal
                        onCancel={handleRecipeModalCancel}
                        recipeName={activeRecipe.name}
                        recipeImageUrl={activeRecipe.imageUrl}
                    /> 
                    : null
                }

            </div>
        </div>
        }
    </div>
  )
}

export default Recipes