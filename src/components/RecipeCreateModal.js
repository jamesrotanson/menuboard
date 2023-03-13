import React, {useState} from 'react'
import Modal from 'antd/es/modal/Modal'
import Button from './Button'
import { addRecipe } from '../reducers/recipeReducer'
import {v4 as uuid} from 'uuid';
import { useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast';

const RecipeCreateModal = ({mode, editRecipeModal, showRecipeCreateModal, setShowRecipeCreateModal}) => {
    
    const [recipeName, setRecipeName] = useState('');
    const [recipeIngredients, setRecipeIngredients] = useState('');
    const [recipeInstructions, setRecipeInstructions] = useState('');
  
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({recipeName, recipeIngredients, recipeInstructions})
        if(recipeName){
            dispatch(
                addRecipe({
                    id: uuid(),
                    recipeName, 
                    recipeIngredients,
                    recipeInstructions,
                    time: new Date().toLocaleString(),
                })
            );
            toast.success("Recipe created successfully");
            setShowRecipeCreateModal(false);
        }
        else {
            toast.error("Name shouldn't be empty")
        }
        
    }

    return (
    <div>
        {showRecipeCreateModal && (
            <Modal
                open={()=> setShowRecipeCreateModal(true)}
                onOk={() => setShowRecipeCreateModal(false)}
                onCancel={() => setShowRecipeCreateModal(false)}
                footer={null}
                maskTransitionName=""
            >
                <form className='Form' onSubmit={(event) => handleSubmit(event)}>
                    <h2>{mode === "Edit" ? "Edit recipe" : "New recipe"}</h2>
                    <label htmlFor="name">
                        Recipe name
                    </label>
                    <input
                        type="text"
                        placeholder="Name"
                        className='Form-input'
                        value={recipeName}
                        onChange={(event) => setRecipeName(event.target.value)}
                    />
                    <label htmlFor="ingredients">
                        Ingredients
                    </label>
                    <input
                        type="text"
                        placeholder="Ingredients"
                        className='Form-input'
                        value={recipeIngredients}
                        onChange={(event) => setRecipeIngredients(event.target.value)}
                    />
                    <label htmlFor="instructions">
                        Instructions
                    </label>    
                    <input
                        type="text"
                        placeholder="Instructions"
                        className='Form-input'
                        value={recipeInstructions}
                        onChange={(event) => setRecipeInstructions(event.target.value)}
                    />
                    <br></br>
                    
                    <div className='Button-group'>
                        <Button type="submit" name="Create" appearance="primary" onClick={() => setShowRecipeCreateModal(true)}/>
                        <Button type="button" name="Cancel" appearance="default" onClick={() => setShowRecipeCreateModal(false)}/>
                    </div>
                </form>
            </Modal>
        )
        }
    </div>
  )
}



export default RecipeCreateModal