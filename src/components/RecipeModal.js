import React, {useState} from 'react'
import RichTextEditor from './RichTextEditor'
import Button from './Button'
import { Modal } from 'antd';

const RecipeModal = (props) => {
    
    const [showRecipeModal, setShowRecipeModal] = useState(true)

    return (
    <div>
        {showRecipeModal ? 
        <Modal title="Basic modal" open={showRecipeModal} onOk={props.onCancel} onCancel={props.onCancel}>
            <h2>New recipe</h2>
            <input
                type="text"
                placeholder="Name"
                // value={recipeName}
                // onChange={(event) => setRecipeName(event.target.value)}
                className="Form-input"
            />
            <h4>Ingredients</h4>
            <RichTextEditor/>
            <h4>Instructions</h4>
            <RichTextEditor/>
        </Modal> 
        : null }
    </div>
)
}

export default RecipeModal