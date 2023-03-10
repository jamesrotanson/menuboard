import React, {useState, useEffect} from 'react'
import {db} from "../firebase-config"
import {
    collection,
    doc,
    addDoc,
    deleteDoc, 
    onSnapshot
} from "firebase/firestore"
import Button from '../components/Button'
import RecipeCard from '../components/RecipeCard'
import { NotePencil, Plus } from 'phosphor-react'

import RecipeCreateModal from '../components/RecipeCreateModal'
import RecipeModal from '../components/RecipeModal'
import Modal from 'antd/es/modal/Modal'

const Recipe = () => {

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

    const handleViewRecipe = (id) => {
        const recipesArray = [...recipes]

        recipesArray.forEach(recipe => {
            if(recipe.id === id){
                recipe.viewing = true
            }
            else {
                recipe.viewing = false
            }
        })

        setRecipes(recipesArray)
    }


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

        if (
            !recipeForm.title ||
            !recipeForm.description ||
            !recipeForm.ingredients ||
            !recipeForm.steps 
        ) {
            // alert("Please fill out all fields")
            return
        }

        addDoc(recipesCollectionRef, recipeForm)

        setRecipeForm({
            title: "",
            desc: "", 
            ingredients: [],
            steps: []
        })

        setShowRecipeCreateModal(false)
        
    }

    // View recipe
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


    // Delete recipe
    const removeRecipe = (id) => {
        deleteDoc(doc(db, "recipes", id))
    }

    
        
    return (
        <div className="Page-container">
            <div className="Page-small">
                <div className="Page-header">
                    <div className='Page-title'>
                        <div>
                        <h2>Recipes</h2>
                        <p>Discover tasty recipes designed to suit your taste, preferences, allergies, body condition, and habits.</p>
                        </div>
                    </div>
                    <Button
                        appearance="primary"
                        name="New recipe" 
                        iconBefore={<NotePencil/>} 
                        onClick={handleOpenRecipeCreateModal}
                    />
                </div>

                {/* <RecipeCreateModal showRecipeCreateModal={showRecipeCreateModal} setShowRecipeCreateModal={setShowRecipeCreateModal}/> */}
                
                <ul className='Recipe-card-list'>
                {recipes.map((recipe, i) => (
                    <div>
                
                    <RecipeCard 
                        key={recipe.id}
                        name={recipe.title}
                        imageUrl={recipe.imageUrl}
                        cost={recipe.cost}
                        time={recipe.time}
                        // onClick={() => handleViewRecipe(recipe.id)}
                        onClick={() => handleRecipeModalOpen(recipe.id)}
                        onDelete={() => removeRecipe(recipe.id)}
                    />
                        {recipe.viewing && 
                            <div>
                            <h4>Ingredients</h4>
                                <ul>
                                    {recipe.ingredients.map((ingredient, i) => (
                                        <li key={i}>{ingredient}</li>
                                    ))}
                                </ul>
                                <h4>Steps</h4>
                                <ol>
                                    {recipe.steps.map((step, i) => (
                                        <li key={i}>{step}</li>
                                    ))}
                                </ol>
                            </div>
                        }
                        </div>
                    ))
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


                {showRecipeCreateModal && 
                    <Modal
                        open={()=> setShowRecipeCreateModal(true)}
                        onOk={() => setShowRecipeCreateModal(false)}
                        onCancel={() => setShowRecipeCreateModal(false)}
                        footer={null}
                        maskTransitionName=""
                    >
                        <div className="Recipe-create-modal">
                            <h2> New recipe</h2>
                            <form className="Form" onSubmit={handleCreateRecipe}>
                                <div className='Form-input-container'>
                                    <label htmlFor="name">Recipe name</label>
                                    <input 
                                        type="text" 
                                        placeholder="Name"
                                        className='Form-input'
                                        value={recipeForm.title}
                                        onChange={(event) => setRecipeForm({...recipeForm, title: event.target.value})}
                                    />
                                </div>
                                <div className='Form-input-container'>
                                    <label htmlFor="name">Recipe description</label>
                                    <textarea 
                                        type="text" 
                                        placeholder="Name"
                                        className='Form-input'
                                        value={recipeForm.description}
                                        onChange={(event) => setRecipeForm({...recipeForm, description: event.target.value})}
                                    />
                                </div>
                                <div className='Form-input-container'>
                                    <label htmlFor="name">Ingredients</label>
                                    {
                                        recipeForm.ingredients.map((ingredient, i) => (
                                            <input 
                                                type="text" 
                                                key={i}
                                                placeholder="Name"
                                                className='Form-input'
                                                value={ingredient}
                                                onChange={(event) => handleIngredient(event, i)}
                                            />
                                        ))
                                    }
                                    <Button type="button" name="Add ingredient" iconBefore={<Plus/>} appearance="default" onClick={handleIngredientCount}/>
                                </div>
                                <div className='Form-input-container'>
                                    <label htmlFor="name">Steps</label>
                                    {
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
                                    <Button type="button" name="Add steps" appearance="default" iconBefore={<Plus/>} onClick={handleStepCount}/>
                                </div>

                                <div className='Button-group'>
                                    <Button type="submit" name="Create" appearance="primary" />
                                    <Button type="button" name="Cancel" appearance="default" onClick={() => setShowRecipeCreateModal(false)}/>
                                </div>
                            </form>

                            {/* {JSON.stringify(recipeForm)} */}
                        </div>
                    </Modal>
                }
                
            </div>
        </div>
    )
}

export default Recipe