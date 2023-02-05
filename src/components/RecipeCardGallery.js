import React, { useState } from 'react'
import RecipeCard from './RecipeCard'




const RecipeCardGallery = (props) => {
    const [recipes, setRecipes] = useState(
        // JSON.parse(localStorage.getItem("recipes")) ||
        [
          { id: 1, name: "Sushi", ingredients: "Rice, salmon, nori, soy sauce", instructions: 'Roll everything', imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Various_sushi%2C_beautiful_October_night_at_midnight.jpg"},
          { id: 2, name: "Ramen", ingredients: "Noodles, chashu, egg, soup, garnish", instructions: 'Boil everything', imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/99/TonkotsuRamen.jpg"},
          { id: 3, name: "Pasta", ingredients: "Pasta, Tomato Sauce, Parmesan", instructions: 'Mix everything', imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Aglio_e_olio.jpg" },
        ]
    );

    return (
        <ul className="Recipe-card-list">
            {recipes.map((recipe) => (
                <RecipeCard
                    name={recipe.name}
                    ingredients={recipe.ingredients}
                    instructions={recipe.instructions}
                    imageUrl={recipe.imageUrl}
                />
            ))}
        </ul>
    )
}

export default RecipeCardGallery