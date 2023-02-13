import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateRecipe = () => {
    const [recipe, setRecipe] = useState({
        name: "",
        ingredients: "", 
        instructions: ""
    })

    const history = useNavigate();

    const handleChange = (event) => {
        setRecipe({...recipe, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('recipe', JSON.stringify(recipe))
        history.push('/recipe');
    }

  return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Recipe title"
            name="title"
            value={recipe.title}
            onChange={handleChange}
        />
        <textarea
            placeholder="Ingredients"
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
        />
        <textarea
            placeholder="Instructions"
            name="instructions"
            value={recipe.instructions}
            onChange={handleChange}
        />
        <button type="submit">Save Recipe</button>
    </form>
  )
}

export default CreateRecipe