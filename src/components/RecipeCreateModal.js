import React, {useState} from 'react'
import Modal from 'antd/es/modal/Modal'
import Button from './Button'

const RecipeCreateModal = ({showRecipeCreateModal, setShowRecipeCreateModal}) => {
    
    const [recipeName, setRecipeName] = useState('');
    const [recipeIngredients, setRecipeIngredients] = useState('');
    const [recipeInstructions, setRecipeInstructions] = useState('');
  
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({recipeName, recipeIngredients, recipeInstructions})
    }

    return (
    <div>
        {showRecipeCreateModal && (
            <Modal
                open={()=> setShowRecipeCreateModal(true)}
                onCancel={() => setShowRecipeCreateModal(false)}
            >
                <form className='Form' onSubmit={(event) => handleSubmit(event)}>
                    <h2>New recipe</h2>
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