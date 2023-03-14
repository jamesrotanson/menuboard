import React, { useState } from 'react'
import Button from './Button'
import { Plus, Check } from 'phosphor-react'

const IngredientItem = (props) => {

    const [plusActive, setPlusActive] = useState(false)

    const handleAddToGrocery = () => {
        setPlusActive(!plusActive)
        
    }

    return (
        <li key={props.key} className="Ingredients-list-item">
            <Button 
                iconBefore={props.added ? <Check/> : <Plus/>} 
                appearance={props.added ? "icon-active" : "default"}
                // onClick={handleAddToGrocery}
                onClick={props.onClick}
            />
            {props.ingredientQuantity} &nbsp;
            {props.ingredientName} &nbsp;
            {props.ingredientType &&
                <span className='Tag'>{props.ingredientType}</span>
            }
            
        </li>
    )
}

export default IngredientItem