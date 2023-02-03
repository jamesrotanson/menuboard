import React, {useState} from 'react'
import RichTextEditor from './RichTextEditor'
import Button from './Button'
import { Modal } from 'antd';

const RecipeModal = (props) => {
    
    const [showRecipeModal, setShowRecipeModal] = useState(true)

    return (
    <div>
        {showRecipeModal ? 
        <Modal 
            // title={props.recipeName}
            open={showRecipeModal} 
            onOk={props.onCancel} 
            onCancel={props.onCancel}
            width="100%"
            style={{ top: 16 }}
        >   
            <div className="Modal-content-wrapper">
                <div className="Modal-content-container">
                    <h1 className="Page-title">{props.recipeName}</h1>
                    <img src={require("../images/miso-ramen.jpeg")} className="Recipe-cover"/>
                    
                    {/* <input
                        type="text"
                        placeholder="Name"
                        value={recipeName}
                        onChange={(event) => setRecipeName(event.target.value)}
                        className="Form-input"
                    /> */}
                    <h4>Ingredients</h4>
                    <p>{props.recipeIngredients}</p>
                    <RichTextEditor content={props.recipeIngredients}/>

                    <h4>Instructions</h4>
                    <p>{props.recipeInstructions}</p>
                    <RichTextEditor/>
                </div>
            </div>            
        </Modal> 
        : null }
    </div>
)
}

export default RecipeModal