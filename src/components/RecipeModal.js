import React, {useState} from 'react'
import RichTextEditor from './RichTextEditor'
import Button from './Button'
import { Modal } from 'antd';
import IngredientsList from './IngredientsList';

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
                    {/* <img src={require("../images/miso-ramen.jpeg")} className="Recipe-cover"/> */}
                    <img src={props.recipeImageUrl} className="Recipe-cover"/>
                    
                    {/* <input
                        type="text"
                        placeholder="Name"
                        value={recipeName}
                        onChange={(event) => setRecipeName(event.target.value)}
                        className="Form-input"
                    /> */}
                    <div className="Recipe-time-tabs-container">
                        <div className="Recipe-time-tabs">
                            <h5>Prep time</h5>
                            <p>10 mins</p>
                        </div>
                        <div className="Recipe-time-tabs">
                            <h5>Cook time</h5>
                            <p>20 mins</p>
                        </div>
                        <div className="Recipe-time-tabs">
                            <h5>Total time</h5>
                            <p>30 mins</p>
                        </div>
                    </div>
                    
                    <h4>Ingredients</h4>
                    <IngredientsList/>
                    <p>{props.recipeIngredients}</p>
                    {/* <RichTextEditor content={props.recipeIngredients}/> */}
                    
                    <h4>Instructions</h4>
                    <p>{props.recipeInstructions}</p>
                    {/* <RichTextEditor/> */}
                </div>
            </div>            
        </Modal> 
        : null }
    </div>
)
}

export default RecipeModal