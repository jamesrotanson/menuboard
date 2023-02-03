import React from 'react'
import '../App.css';
import { Plus } from 'phosphor-react';
import Button from './Button';

const IngredientsList = () => {

    const ingredientsData = [
        {id:1, name:"Garlic", unit: "2 cloves"},
        {id:2, name:"Ginger", unit: "1 knob"}
    ];

    const ingredientsList = ingredientsData.map((ingredients) => 
        <div className="Ingredients-list-item">
            <Button iconBefore={<Plus/>} appearance="default"/>
            <p>{ingredients.unit}</p>
            <p>{ingredients.name}</p>
        </div>
    )

    return (
        <div>
            {ingredientsList}
        </div>
    )
}

export default IngredientsList