import React, {useState} from 'react'
import { Modal } from 'antd';

const RecipeModal = (props) => {
    
    
    const [imageLoaded, setImageLoaded] = useState(false)
    

    const [showRecipeModal, setShowRecipeModal] = useState(true)

    

    return (
    <div>
        {showRecipeModal ? 
        <Modal 
            open={showRecipeModal} 
            onOk={props.onOk} 
            onCancel={props.onCancel}
            width={880}
            footer={null}
            style={{ top: 40 }}
        >   
            <div className="Modal-content-wrapper">
                {props.imageUrl ? 
                    <img src={props.imageUrl} alt="Recipe cover" className="Recipe-cover"/>
                    :
                    <img src={require("../images/food-illos.png")} alt="Recipe thumbnail" className="Recipe-cover" onClick={props.onClick}/>
                }
                <div className="Modal-content-container">
                    <h2 className="Page-title">{props.name}</h2>
                    <p>{props.description}</p>
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
                    <div className="Recipe-time-tabs-container">
                        <div className="Recipe-time-tabs">
                            <h5>Difficulty</h5>
                            <p>Intermediate</p>
                        </div>
                        <div className="Recipe-time-tabs">
                            <h5>Cuisine</h5>
                            <p>Japanese</p>
                        </div>
                        <div className="Recipe-time-tabs">
                            <h5>Estimated cost</h5>
                            <p>$4 / servings</p>
                        </div>
                    </div>
                    
                    <h3>Ingredients</h3>
                    <p>{props.ingredients}</p>
                    {/* <RichTextEditor content={props.recipeIngredients}/> */}
                    
                    <h3>Steps</h3>
                    <p>{props.steps}</p>
                    {/* <RichTextEditor/> */}
                    <br></br>
                    <br></br>
                </div>
            </div>            
        </Modal> 
        : null }
    </div>
)
}

export default RecipeModal