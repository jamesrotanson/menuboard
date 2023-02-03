import React, { useState, useEffect} from "react";
import '../App.css';
import { IconContext, MagnifyingGlass, X, Trash, NotePencil, PlusCircle, Pencil,} from 'phosphor-react';
import Modal from 'react-modal';
import RichTextEditor from "../components/RichTextEditor";
import RecipeModal from "../components/RecipeModal";
import Button from "../components/Button";

const Recipes = () => {
  const [recipes, setRecipes] = useState(
    JSON.parse(localStorage.getItem("recipes")) ||
    [
      { id: 1, name: "Pizza", ingredients: "Dough, Tomato Sauce, Cheese", instructions: 'Mix everything', image: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"},
      { id: 2, name: "Pasta", ingredients: "Pasta, Tomato Sauce, Parmesan", instructions: 'Mix everything', image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Aglio_e_olio.jpg" },
      { id: 3, name: "Salad", ingredients: "Lettuce, Tomato, Cucumber, Salad Dressing", instructions: 'Mix everything', image: "https://upload.wikimedia.org/wikipedia/commons/9/94/Salad_platter.jpg" },
    ]
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [recipeName, setRecipeName] = useState("");
  const [recipeIngredients, setRecipeIngredients] = useState("");
  const [recipeInstructions, setRecipeInstructions] = useState("");

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);


  const handleAddRecipe = (recipe) => {
    setRecipes([...recipes, { id: recipes.length + 1, name: recipeName, ingredients: recipeIngredients, instructions: recipeInstructions }]);
    setShowModal(false);
    setRecipeName("");
    setRecipeIngredients("");
    setRecipeInstructions("");
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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [showRecipeModal, setShowRecipeModal] = useState(false)

  const handleOpenRecipe = () => {
    setShowRecipeModal(true)
    console.log('open')
  }

  const handleCancelRecipe = () => {
    setShowRecipeModal(false)
    console.log('cancel')
  }

  return (
    <div className="Page-container">
      <div className="Page-cover-container">
        <img src={require("../images/food-illos.png")}/>
      </div>
      <div className="Page-small">
        {/* <div className="Page-header">
          <h2 className="Page-title">Recipes</h2>
          <button onClick={() => setShowModal(true)} className="Button-primary"><NotePencil size={24}/>New recipe</button>
        </div> */}
        <div className='Section-hero'>
          <div className='Section-hero-content'>
            <h1>Recipes</h1>
            <h2>Discover tasty recipes designed to suit your taste, preferences, allergies, body condition, and habits.</h2>
            <button onClick={() => setShowModal(true)} className="Button-primary"><NotePencil size={24}/>New recipe</button>
          </div>
        </div>
        <div className="Search-bar">
          <MagnifyingGlass/>
          <input type="text" placeholder="Search recipes or ingredients" onChange={handleSearch} className="Search-input" />
        </div>

        <Button name="Open modal" appearance="default" onClick={handleOpenRecipe}/>
        {showRecipeModal ? <RecipeModal onCancel={handleCancelRecipe}/> : null}

        {/* {showRecipeModal && (<RecipeModal/>)} */}
        
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
              </div>
            </div>
        )}
        <ul className="Recipe-card-list">
          {filteredRecipes.map((recipe) => (
            <li key={recipe.id} className="Recipe-card">
              <img src={require("../images/food-illos.png")} className="Recipe-thumbnail"/>
              <h3>{recipe.name}</h3>
              <p>{recipe.ingredients}</p>
              {/* <p>{recipe.image}</p> */}
              <small>{recipe.instructions}</small>
              <div className="Button-group">
                <button className="Button-default">
                  <PlusCircle size={16}/>Add
                </button>
                <button onClick={() => handleUpdateRecipe({ ...recipe, name: "Updated Recipe" })} className="Button-default">
                  <Pencil/>Edit
                </button>
                <button onClick={() => handleDeleteRecipe(recipe.id)} className="Button-delete"><Trash/>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recipes;



