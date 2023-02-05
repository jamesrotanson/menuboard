import React, { useState, useEffect} from "react";
import '../App.css';
import { IconContext, MagnifyingGlass, X, Trash, NotePencil, PlusCircle, Pencil, Notepad,} from 'phosphor-react';
import Modal from 'react-modal';
import RichTextEditor from "../components/RichTextEditor";
import RecipeModal from "../components/RecipeModal";
import Button from "../components/Button";
import RecipeData from "../data/RecipeData.json";  

const Recipes = () => {
  const [recipes, setRecipes] = useState(
    JSON.parse(localStorage.getItem("recipes")) ||
    [
      { id: 1, name: "Sushi", ingredients: "Rice, salmon, nori, soy sauce", instructions: 'Roll everything', imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Various_sushi%2C_beautiful_October_night_at_midnight.jpg"},
      { id: 2, name: "Ramen", ingredients: "Noodles, chashu, egg, soup, garnish", instructions: 'Boil everything', imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/99/TonkotsuRamen.jpg"},
      { id: 3, name: "Pasta", ingredients: "Pasta, Tomato Sauce, Parmesan", instructions: 'Mix everything', imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Aglio_e_olio.jpg" },
      { id: 4, name: "Salad", ingredients: "Lettuce, Tomato, Cucumber, Salad Dressing", instructions: 'Mix everything', imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/94/Salad_platter.jpg" },
    ]
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [recipeName, setRecipeName] = useState("");
  const [recipeIngredients, setRecipeIngredients] = useState("");
  const [recipeInstructions, setRecipeInstructions] = useState("");
  const [recipeImageUrl, setRecipeImageUrl] = useState("");

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);


  const handleAddRecipe = (recipe) => {
    setRecipes([...recipes, { id: recipes.length + 1, name: recipeName, ingredients: recipeIngredients, instructions: recipeInstructions, imageUrl: recipeImageUrl }]);
    setShowModal(false);
    setRecipeName("");
    setRecipeIngredients("");
    setRecipeInstructions("");
    setRecipeImageUrl("");
  };

  const handleUpdateRecipe = (updatedRecipe) => {
    setRecipes(
      recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    );
  };

  const handleDeleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };


  // SEARCH RECIPES
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  // OPEN RECIPE MODAL
  const [showRecipeModal, setShowRecipeModal] = useState(false)
  const [activeRecipe, setActiveRecipe] = useState({});
  

  const handleOpenRecipe = (recipe) => {
    setShowRecipeModal(true);    
    setActiveRecipe(recipe);
  }

  const handleCancelRecipe = () => {
    setShowRecipeModal(false);
  }

  return (
    <div className="Page-container">
      <div className="Page-small">
        <div className="Page-header">
          <div className="Page-title">
            <div>
              <h2>Recipes</h2>
              <p>Discover tasty recipes designed to suit your taste, preferences, allergies, body condition, and habits.</p>
            </div>
          </div>
          <button onClick={() => setShowModal(true)} className="Button-primary"><NotePencil size={24}/>New recipe</button>
        </div>
        
        <div className="Search-bar">
          <MagnifyingGlass/>
          <input type="text" placeholder="Search recipes or ingredients" onChange={handleSearch} className="Search-input" />
        </div>

        
        
        {showModal && (
            <div className="Modal-blanket" >
              <div className="Modal">
                <h2>New recipe</h2>
                <input
                  type="text"
                  placeholder="Name"
                  value={recipeName}
                  onChange={(event) => setRecipeName(event.target.value)}
                  className="Form-input"
                />
                <h4>Ingredients</h4>
                <RichTextEditor/>
                <h4>Instructions</h4>
                <RichTextEditor/>
                {/* <input
                  type="text"
                  placeholder="Ingredients"
                  value={recipeIngredients}
                  onChange={(event) => setRecipeIngredients(event.target.value)}
                  className="Form-input"
                /> */}
                <input
                  type="text"
                  placeholder="Instructions"
                  value={recipeInstructions}
                  onChange={(event) => setRecipeInstructions(event.target.value)}
                  className="Form-input"
                />
                <div className="Button-group">
                  <button onClick={() => setShowModal(false)} className="Button-default">Close</button>
                  <button onClick={handleAddRecipe} className="Button-primary">Save</button>
                </div>
                <select>
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option selected value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select>
                <input type="file" />
              </div>
            </div>
        )}

        <ul className="Recipe-card-list">
          {filteredRecipes.map((recipe) => (
            <li key={recipe.id} className="Recipe-card" onClick={() => handleOpenRecipe(recipe)}>
              {/* <img src={require("../images/food-illos.png")} className="Recipe-thumbnail"/> */}
              <img src={recipe.imageUrl} className="Recipe-thumbnail"/>
              <h3>{recipe.name}</h3>
              <p>{recipe.ingredients}</p>
              <small>{recipe.instructions}</small>
              <div className="Button-group">
                <button className="Button-default">
                  <Notepad size={16}/>Add
                </button>
                {/* <button onClick={() => handleUpdateRecipe({ ...recipe, name: "Updated Recipe" })} className="Button-default">
                  <Pencil/>Edit
                </button> */}
                <button onClick={() => handleDeleteRecipe(recipe.id)} className="Button-delete"><Trash/>Delete</button>
              </div>
            </li>
          ))}
        </ul>

        {showRecipeModal ? 
          <RecipeModal onCancel={handleCancelRecipe} 
            recipeName={activeRecipe.name}
            recipeIngredients={activeRecipe.ingredients}
            recipeInstructions={activeRecipe.instructions}
            recipeImageUrl={activeRecipe.imageUrl}
          />
        : null}

      </div>
    </div>
  );
};

export default Recipes;



