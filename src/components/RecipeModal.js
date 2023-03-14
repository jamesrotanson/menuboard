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
                            <h5>Cook time</h5>
                            <p> {props.time ? null : "--" } {props.time}</p>
                        </div>
                        <div className="Recipe-time-tabs">
                            <h5>Estimated cost</h5>
                            <p> {props.cost ? "Est. " : null} {props.cost ? null : "--" } {props.cost} {props.cost ? "/ servings" : null}</p>
                        </div>
                        <div className="Recipe-time-tabs">
                            <h5>Plan for</h5>
                            <p>{props.plannedDate ? null : "--" } {props.plannedDate}</p>
                        </div>
                    </div>
                    <div className="Recipe-time-tabs-container">
                        <div className="Recipe-time-tabs">
                            <h5>Difficulty</h5>
                            <p>{props.difficulty ? null : "--" } {props.difficulty}</p>
                        </div>
                        <div className="Recipe-time-tabs">
                            <h5>Cuisine</h5>
                            <p>{props.cuisine ? null : "--" } {props.cuisine}</p>
                        </div>
                        <div className="Recipe-time-tabs">
                            {/* <h5>Plan for</h5>
                            <p>{props.plannedDate ? null : "--" } {props.plannedDate}</p> */}
                        </div>
                        
                    </div>
                    
                    <h3>Ingredients</h3>
                    <div>{props.ingredients}</div>
                    
                    {/* <RichTextEditor content={props.recipeIngredients}/> */}
                    
                    <h3>Steps</h3>
                    <div>{props.steps}</div>
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