import React, { useState, useEffect} from "react";
import '../App.css';
import {  X, Trash, NotePencil, PlusCircle, Pencil, Notepad, CalendarPlus} from 'phosphor-react';
import Modal from 'react-modal';
import RichTextEditor from "../components/RichTextEditor";
import RecipeModal from "../components/RecipeModal";
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";
import LoadingPage from "./LoadingPage";
import recipesData from "../data/recipes.json"

const Recipes = () => {

  // Loading
  const [loading, setLoading] = useState(true)

  setTimeout(() => setLoading(false), 1400);


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

  // Handle add to plan
  const [addToPlan, setAddToPlan] = useState(false)
  const handleAddToPlan = (event) => {
      event.target.classList.toggle("Button-secondary-active");
  }

  return (
    <div>
      {loading ? <LoadingPage loadHeaderMessage="Recommending some recipes..."/> : 
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
          
          <SearchBar placeholder="Search recipes or ingredients" onChange={handleSearch} appearance="default"/>   
          
          {showModal && (
              <div className="Modal-blanket" >
                <div className="Modal">
                  <h2>New recipe</h2>
                  <small>Name</small>
                  <input
                    type="text"
                    placeholder="Name"
                    value={recipeName}
                    onChange={(event) => setRecipeName(event.target.value)}
                    className="Form-input"
                  />
                  <br></br>
                  <small>Ingredients</small>
                  {/* <RichTextEditor/> */}
                  <input
                    type="text"
                    placeholder="Ingredients"
                    value={recipeIngredients}
                    onChange={(event) => setRecipeIngredients(event.target.value)}
                    className="Form-input"
                  />
                  <br></br>
                  <small>Instructions</small>
                  {/* <RichTextEditor/> */}
                  <input
                    type="text"
                    placeholder="Instructions"
                    value={recipeInstructions}
                    onChange={(event) => setRecipeInstructions(event.target.value)}
                    className="Form-input"
                  />
                  <br></br>
                  <input
                    type="text"
                    placeholder="Image Url"
                    value={recipeImageUrl}
                    onChange={(event) => setRecipeImageUrl(event.target.value)}
                    className="Form-input"
                  />
                  {/* <input 
                    type="file" 
                    value={recipeImageUrl}
                    onChange={(event) => setRecipeImageUrl(event.target.value)}
                    className="Form-input"
                  /> */}
                  {/* <select>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option selected value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                  </select>
                  <input type="file" /> */}
                  <div className="Button-group">
                    <Button name="Cancel" appearance="default" onClick={() => setShowModal(false)}/>
                    <Button name="Save" appearance="primary" onClick={handleAddRecipe}/>
                  </div>
                </div>
              </div>
          )}

          <ul className="Recipe-card-list">
            {filteredRecipes.map((recipe) => (
              <li key={recipe.id} className="Recipe-card" >
                {/* <img src={require("../images/food-illos.png")} className="Recipe-thumbnail"/> */}
                <img src={recipe.imageUrl} className="Recipe-thumbnail" onClick={() => handleOpenRecipe(recipe)}/>
                <h3 onClick={() => handleOpenRecipe(recipe)}><a>{recipe.name}</a></h3>
                <p>{recipe.ingredients}</p>
                <small>{recipe.instructions}</small>
                <div className="Button-group">
                  <Button name={addToPlan ? "Added" : "Add"} iconBefore={<CalendarPlus/>} appearance="secondary" onClick={handleAddToPlan} />
                  {/* <button onClick={() => handleUpdateRecipe({ ...recipe, name: "Updated Recipe" })} className="Button-default">
                    <Pencil/>Edit
                  </button> */}
                  <Button name="Delete" iconBefore={<Trash/>} appearance="delete" onClick={() => handleDeleteRecipe(recipe.id)}/>
                </div>
              </li>
            ))}
          </ul>

          {showRecipeModal ? 
            <RecipeModal 
              onCancel={handleCancelRecipe} 
              recipeName={activeRecipe.name}
              recipeIngredients={activeRecipe.ingredients}
              recipeInstructions={activeRecipe.instructions}
              recipeImageUrl={activeRecipe.imageUrl}
            />
          : null}

        </div>
      </div>
    }
    </div>
  );
};

export default Recipes;



