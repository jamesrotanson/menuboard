import React, {useState} from 'react'
import '../App.css';
import { Plus } from 'phosphor-react';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { addToGroceryList } from '../reducers/groceryReducer';
import {v4 as uuid} from 'uuid';
import { toast } from 'react-hot-toast';

const IngredientsList = (props) => {

    const ingredientsData = [
        {id:1, name:"Garlic", unit: "2 cloves"},
        {id:2, name:"Ginger", unit: "1 knob"},
        {id:3, name:"Shallot", unit: "1"},
        {id:4, name:"Ramen noodles", unit: "2 servings"},
        {id:5, name:"Chashu", unit: ""},
        {id:6, name:"Soft boiled egg (Ajitama egg)", unit: ""},
        {id:7, name:"Chicken broth", unit: "4 cups"},
        {id:8, name:"Miso soup", unit: "3 tbsp"},
    ];

    const [addIngredientActive, setAddIngredientActive] = useState(false);
    
    const dispatch = useDispatch();

    const handleAddToGrocery = (event) => {
        setAddIngredientActive(true);
        event.currentTarget.classList.toggle('Button-active');
        if(props.name){
            dispatch(
                addToGroceryList({
                    id: uuid(),
                    name: props.name,
                    unit: props.unit,
                })
            )

            toast.success("Added to grocery list")
        }
        else {
            toast.error("Failed to add to grocery list")
        }
    }

    const ingredientsList = ingredientsData.map((ingredients) => 
        <li className="Ingredients-list-item" key={ingredients.toString()}>
            <Button iconBefore={<Plus/>} appearance="default" onClick={handleAddToGrocery}/>
            <p>{ingredients.unit} {' '} {ingredients.name}</p>
            {/* <p>{ingredients.name}</p> */}
        </li>
    )

    return (
        <ul>
            {ingredientsList}
        </ul>
    )
}

export default IngredientsList