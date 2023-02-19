import React, {useState} from 'react'
import RichTextEditor from './RichTextEditor'
import Button from './Button'
import { Modal } from 'antd';
import IngredientsList from './IngredientsList';

const RecipeModal = (props) => {
    
    const [showRecipeModal, setShowRecipeModal] = useState(true)
    const [imageLoaded, setImageLoaded] = useState(false)
    

    return (
    <div>
        {showRecipeModal ? 
        <Modal 
            // title={props.recipeName}
            open={showRecipeModal} 
            onOk={props.onCancel} 
            onCancel={props.onCancel}
            // width="100%"
            width="800px"
            style={{ top: 40 }}
        >   
            <div className="Modal-content-wrapper">
                <div className="Modal-content-container">
                    <h1 className="Page-title">{props.recipeName}</h1>
                    {props.imageUrl ? 
                    <img src={props.recipeImageUrl} alt="Recipe cover" className="Recipe-cover"/>
                    :
                    <img src={require("../images/food-illos.png")} alt="Recipe thumbnail" className="Recipe=thumbnail" onClick={props.onClick}/>
                    }
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
                    
                    <h3>Ingredients</h3>
                    <IngredientsList/>
                    <p>{props.recipeIngredients}</p>
                    {/* <RichTextEditor content={props.recipeIngredients}/> */}
                    
                    <h3>Instructions</h3>
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