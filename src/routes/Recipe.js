import React, {useState, useEffect} from 'react'
import {db} from "../firebase-config"
import {
    collection,
    doc,
    addDoc,
    updateDoc,
    deleteDoc, 
    onSnapshot
} from "firebase/firestore"
import Button from '../components/Button'
import RecipeCard from '../components/RecipeCard'
import { NotePencil, Plus } from 'phosphor-react'
import RecipeModal from '../components/RecipeModal'
import Modal from 'antd/es/modal/Modal'
import RecipesData from '../data/recipes.json'
import SearchBar from '../components/SearchBar'
import LoadingPage from './LoadingPage'
import FeedbackCollector from '../components/FeedbackCollector'
import IngredientItem from '../components/IngredientItem'
import CreateRecipeModal from '../components/CreateRecipeModal'
import { toast } from 'react-hot-toast'

const Recipe = () => {

    // LOADING
    const [loading, setLoading] = useState(true)
    setTimeout(() => setLoading(false), 1000);


    // TABS
    const [tabState, setTabState] = useState(1);

    const toggleTabs = (index) => {
        setTabState(index)
    }
    
    // RECIPES
    const [recipes, setRecipes] = useState([])
    
    const [recipeForm, setRecipeForm] = useState({
        title: "",
        description: "", 
        ingredients: [], 
        steps: []
    })

    

    const recipesCollectionRef = collection(db, "recipes")

    useEffect(() => {
        onSnapshot(recipesCollectionRef, snapshot => {
            setRecipes(snapshot.docs.map(doc => {
                return {
                    id: doc.id, 
                    viewing: false,
                    ...doc.data()
                }
            }))
        })
    }, [])

    


    // Create recipe
    const [showRecipeCreateModal, setShowRecipeCreateModal] = useState(false);
    

    const handleOpenRecipeCreateModal = () => {
        setShowRecipeCreateModal(true)
    }

    const handleIngredient = (event, i) => {
        const ingredientsArray = [...recipeForm.ingredients]

        ingredientsArray[i] = event.target.value

        setRecipeForm({
            ...recipeForm, 
            ingredients: ingredientsArray
        })
    }

    const handleIngredientCount = () => {
        setRecipeForm({
            ...recipeForm, 
            ingredients: [...recipeForm.ingredients, ""]
        })
    }

    const handleStep = (event, i) => {
        const stepsArray = [...recipeForm.steps]

        stepsArray[i] = event.target.value

        setRecipeForm({
            ...recipeForm, 
            steps: stepsArray
        })
    }

    const handleStepCount = () => {
        setRecipeForm({
            ...recipeForm, 
            steps: [...recipeForm.steps, ""]
        })
    }


    const handleCreateRecipe = (event) => {
        console.log('Create my recipe')
        // event.preventDefault()

        // if (
        //     !recipeForm.title ||
        //     !recipeForm.description ||
        //     !recipeForm.ingredients ||
        //     !recipeForm.steps 
        // ) {
        //     alert("Please fill out all fields")
        //     return
        // }

        addDoc(recipesCollectionRef, recipeForm)

        setRecipeForm({
            title: "",
            desc: "", 
            ingredients: [],
            steps: []
        })

        setShowRecipeCreateModal(false)   
    }

    // View user generated recipe
    
    const [showRecipeModal, setShowRecipeModal] = useState(false)
    const [activeRecipe, setActiveRecipe] = useState([]);

    const handleRecipeModalOpen = (recipe) => {
        setShowRecipeModal(true)
        setActiveRecipe(recipe)
    }

    useEffect(() => {
        onSnapshot(recipesCollectionRef, snapshot => {
            setRecipes(snapshot.docs.map(doc => {
                return {
                    id: doc.id, 
                    viewing: false,
                    ...doc.data()
                }
            }))
        })
    }, [])

    const handleRecipeModalCancel = () => {
        setShowRecipeModal(false)
        console.log('Cancel')
    }


    // View recommended recipe
    const [showRecommendedRecipeModal, setShowRecommendedRecipeModal] = useState(false)
    const [activeRecommendedRecipe, setActiveRecommendedRecipe] = useState([])

    const handleViewRecommendedRecipeModal = (recipe) => {
        setShowRecommendedRecipeModal(true)
        setActiveRecommendedRecipe(recipe)
    }

    const handleRecommendedRecipeModalCancel = () => {
        setShowRecommendedRecipeModal(false)
    }
    

    // Edit recipe
    const [editRecipeModal, setEditRecipeModal] = useState(false)

    const handleRecipeEditModal= () => {
        setEditRecipeModal(true)
        console.log('edit')
    }

    // Delete recipe
    const removeRecipe = (id) => {
        deleteDoc(doc(db, "recipes", id))
    }

    // Search
    const [searchTerm, setsearchTerm] = useState("")
    const handleSearch = (event) => {
        setsearchTerm(event.target.value)
    }

    const filteredRecipes = RecipesData.filter((recipe) => 
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );


    // Ingredients list
    const [ingredientsList, setIngredientsList] = useState({
        name: "", 
    });

    const ingredientsCollectionRef = collection(db, "ingredients")

    const [ingredientAdded, setIngredientAdded] = useState(true)

    const handleAddToIngredientsList = (ingredient) => {

        console.log("add to ingredients")
        // console.log(ingredient.name, ingredient.quantity)
        console.log(ingredient)
        // Why is this lagging by one event?
        console.log(ingredientsList)

        addDoc(ingredientsCollectionRef, ingredientsList)

        setIngredientsList({
            // ...ingredient,
            name: ingredient.name,
        })

        setIngredientAdded(!ingredientAdded)
        toast.success("Ingredient added to grocery list!");
        
    }

    return (
        <div>
        {loading ? <LoadingPage/> :
        <div className="Page-container">
            <div className="Page-small">
                <div className="Page-header">
                    <div className='Page-title'>
                        <h2 className='flex-grow'>My recipes</h2>
                        <Button
                            appearance="primary"
                            name="New recipe" 
                            iconBefore={<NotePencil/>} 
                            onClick={handleOpenRecipeCreateModal}
                        />
                    </div>
                    <SearchBar placeholder="Search recipes" onChange={handleSearch} appearance="default"/> 
                    
                </div>

                

                {/* <div className='Tabs-controls'>
                    <div className={tabState === 1 ? "Tab Tab-active" : "Tab"} onClick={() => toggleTabs(1)}>My recipes</div>
                    <div className={tabState === 2 ? "Tab Tab-active" : "Tab"} onClick={() => toggleTabs(2)}>Recommended for you</div>
                </div> */}
                <ul className='Recipe-card-list'>       
                    {recipes.map((recipe, i) => (

                            <RecipeCard 
                                key={recipe.id}
                                name={recipe.title}
                                imageUrl={recipe.imageUrl}
                                cost={recipe.cost}
                                time={recipe.time}
                                onClick={() => handleRecipeModalOpen(recipe)}
                                onDelete={() => removeRecipe(recipe.id)}
                                onEdit={() => handleRecipeEditModal()}
                                nonEditable={true}
                            />

                        ))
                    }
                </ul>

                <br></br>
                <br></br>
                <h3>Because you like Japanese food</h3>                    
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
                                    onClick={() => handleViewRecommendedRecipeModal(recipe)}
                                    // onClick={() => handleRecipeModalOpen(recipe)}
                                    // onDelete={() => handleDeleteRecipe(recipe.id)}
                                />
                            )
                        })
                    }
                </ul>

                <div className="Tabs-content">

                    <div className={tabState === 2 ? 'Tab-content Tab-content-active' : "Tab-content"}>
                        <br></br>
                        <br></br>
                    </div>

                    <div className={tabState === 1 ? 'Tab-content Tab-content-active' : "Tab-content"}>
                        <br></br>
                        <br></br>
                    </div>
                </div>
                

                <br></br>


                {showRecommendedRecipeModal && 
                    <RecipeModal
                        onOk={handleRecommendedRecipeModalCancel}
                        onCancel={handleRecommendedRecipeModalCancel}
                        name={activeRecommendedRecipe.name}
                        imageUrl={activeRecommendedRecipe.imageUrl}
                        cost={activeRecommendedRecipe.cost}
                        time={activeRecommendedRecipe.time}
                        difficulty={activeRecommendedRecipe.difficulty}
                        cuisine={activeRecommendedRecipe.cuisine}
                        ingredients={
                            <ul>
                                {activeRecommendedRecipe.ingredients.map((ingredient, i) => (
                                    <IngredientItem 
                                        key={i} 
                                        ingredientName={ingredient.name}
                                        ingredientQuantity={ingredient.quantity}
                                        ingredientType={ingredient.type}
                                        onClick={() => handleAddToIngredientsList(ingredient)}   
                                    />
                                ))}
                            </ul>
                        }
                        steps={
                            <ol>
                                {activeRecommendedRecipe.steps.map((step, i) => (
                                    <li key={i}>{step}</li>
                                ))}
                            </ol>
                        }
                    />
                }
                

                {showRecipeModal ? 
                    <RecipeModal
                        onOk={handleRecipeModalCancel}
                        onCancel={handleRecipeModalCancel}
                        name={activeRecipe.title}
                        // description={activeRecipe.description}
                        ingredients={
                            <ul>
                                {activeRecipe.ingredients.map((ingredient, i) => (
                                    <IngredientItem key={i} 
                                        ingredientName={ingredient}
                                        
                                    />
                                ))}
                            </ul>
                        }
                        steps={
                            <ol>
                                {activeRecipe.steps.map((step, i) => (
                                    <li key={i}>{step}</li>
                                ))}
                            </ol>
                        }
                    /> 

                    : null
                }

                
                {editRecipeModal && 
                    <CreateRecipeModal/>
                }

                {showRecipeCreateModal &&
                    <CreateRecipeModal
                        open={()=> setShowRecipeCreateModal(true)}
                        onOk={() => setShowRecipeCreateModal(false)}
                        onCancel={() => setShowRecipeCreateModal(false)}
                        onSubmit={handleCreateRecipe}
                        recipeNameValue={recipeForm.title}
                        recipeNameOnChange={(event) => setRecipeForm({...recipeForm, title: event.target.value})}
                        recipeDescriptionValue={recipeForm.description}
                        recipeDescriptionOnChange={(event) => setRecipeForm({...recipeForm, description: event.target.value})}
                        recipeIngredients={
                            recipeForm.ingredients.map((ingredient, i) => (
                                <input 
                                    type="text" 
                                    key={i}
                                    placeholder="Add to list"
                                    className='Form-input Form-input-subtle'
                                    value={ingredient}
                                    onChange={(event) => handleIngredient(event, i)}
                                />
                            ))
                        }
                        handleIngredientCount={handleIngredientCount}
                        recipeSteps={
                            recipeForm.steps.map((step, i) => (
                                <input 
                                    type="text" 
                                    key={i}
                                    placeholder="Name"
                                    className='Form-input'
                                    value={step}
                                    onChange={(event) => handleStep(event, i)}
                                />
                            ))
                        }
                        handleStepCount={handleStepCount}
                        
                    />
                } 

                <FeedbackCollector/>
            </div>
        </div>
        }
        </div>
    )
}

export default Recipe