import React, { useState, useEffect } from "react";
import {db} from "../firebase-config"
import {
    collection,
    doc,
    addDoc,
    updateDoc,
    deleteDoc, 
    onSnapshot
} from "firebase/firestore"
import '../App.css';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import RecipeModal from "./RecipeModal";
import Modal from "antd/es/modal/Modal";
import CreateRecipeModal from "./CreateRecipeModal";

const MealCalendar = () => {
  const [events, setEvents] = useState(
    [
      { 
        title: "Miso soup",
        date: "2023-01-31", 
        backgroundColor: "white",
        borderColor: "white",
        extendedProps: {
          type: 'Breakfast',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Miso_Soup_001.jpg'
        },
        editable: true, 
        daysOfWeek: [ 1, 2, 4, 6 ],
      },
      { 
        title: "Scrambled egg",
        date: "2023-02-01", 
        backgroundColor: "white",
        borderColor: "white",
        extendedProps: {
          type: 'Breakfast',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Scrambed_eggs.jpg'
        },
        editable: true,
        daysOfWeek: [ 3,5,7 ],
      },
      { 
        title: "Chicken noodle",
        date: "2023-02-01", 
        backgroundColor: "white",
        borderColor: "white",
        extendedProps: {
          type: 'Lunch',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Mi_ayam_jamur.JPG'
        },
        editable: true,
        daysOfWeek: [ 2, 4,7 ],
      },
      {
        title: "Fried rice",
        date: "2023-02-02", 
        backgroundColor: "white", 
        borderColor: "white", 
        extendedProps: {
          type: 'Lunch',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Nasi_goreng_seafood.png'
        },
        editable: true
      },
      { 
        title: "Japanese Curry",
        date: "2023-02-03", 
        backgroundColor: "white",
        borderColor: "white",
        extendedProps: {
          type: 'Lunch',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Katsu_curry_by_luckypines.jpg'
        },
        editable: true, 
      },
      { 
        title: "Sushi",
        date: "2023-01-30", 
        backgroundColor: "white",
        borderColor: "white",
        extendedProps: {
          type: 'Lunch',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Various_sushi%2C_beautiful_October_night_at_midnight.jpg'
        },
        editable: true, 
        daysOfWeek: [ 1 , 3 ],
      },
      { 
        title: "Salad",
        date: "2023-02-04", 
        backgroundColor: "white",
        borderColor: "white",
        extendedProps: {
          type: 'Lunch',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Salad_platter.jpg'
        },
        editable: true, 
      },
      { 
        title: "Sweet and sour pork",
        date: "2023-01-31", 
        backgroundColor: "white",
        borderColor: "white",
        extendedProps: {
          type: 'Dinner',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Sweet-and-sour_pork.jpg'
        },
        editable: true, 
      },
      { 
        title: "Spaghetti",
        date: "2023-01-30", 
        backgroundColor: "white",
        borderColor: "white",
        extendedProps: {
          type: 'Dinner',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Spaghetti_and_meatballs_1.jpg'
        },
        editable: true, 
        daysOfWeek: [ 5 , 6 ],
      },
      { 
        title: "Bibimbap",
        date: "2023-02-12", 
        backgroundColor: "white",
        borderColor: "white",
        extendedProps: {
          type: 'Dinner',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Dolsot-bibimbap.jpg'
        },
        editable: true, 
      },
      
    ]
  );


  const [showModal, setShowModal] = useState(false);
  const [recipeName, setRecipeName] = useState("");
  const [activeRecipe, setActiveRecipe] = useState([])

  const handleDateClick = (recipe) => {
    // setEvents([...events, { title: "New Event", date: arg.dateStr }]);
    setShowModal(true);
    setActiveRecipe(recipe)
  };


  // OPEN RECIPE DETAIL
  const [showRecipeModal, setShowRecipeModal] = useState(false);
  const handleOpenRecipe = (recipe) => {
    setShowRecipeModal(true)
    setActiveRecipe(recipe)
  }

  const handleCancelRecipe = () => {
    setShowRecipeModal(false)
  }

  const [scheduledRecipe, setScheduledRecipe] = useState({
    start: "",
    end: "", 
    filledIn: false, 
  })

  const handleSelectRecipe = (recipe) => {
    console.log('Create')
    setScheduledRecipe({
      start: recipe.startStr,
      end: recipe.endStr,
      filledIn: true
    })
  }

  const renderEventContent = (recipe) => {
    return (
      <div className="Calendar-event" onClick={() => handleOpenRecipe(recipe)}>
        <img className="Calendar-event-thumbnail" src={recipe.event.extendedProps.imageUrl} alt="Recipe thumbnail"/>
        <div className="Calendar-event-info">
          <h4>{recipe.event.title}</h4>
          <small>{recipe.event.extendedProps.type}</small>
          {/* <AvatarGroup size="small"/> */}
        </div>
      </div>
    )
  }

  // Create recipe
  const [showRecipeCreateModal, setShowRecipeCreateModal] = useState(false)

  const handleOpenRecipeCreateModal = () => {
    setShowRecipeCreateModal(true)
  }

  const [recipeForm, setRecipeForm] = useState({
    title: "",
    description: "", 
    ingredients: [], 
    steps: []
  })

  const recipesCollectionRef = collection(db, "recipes")

  const handleCreateRecipe =() => {
    addDoc(recipesCollectionRef, recipeForm)
    
    setRecipeForm({
        title: "",
        desc: "", 
        ingredients: [],
        steps: []
    })

    setShowRecipeCreateModal(false) 
  }

  const handleIngredient = (event, i) => {
      const ingredientsArray = [...recipeForm.ingredients]

      ingredientsArray[i] = event.target.value

      setRecipeForm({
          ...recipeForm, 
          ingredients: ingredientsArray
      })
  }

  const handleIngredientCount = () => {
      setRecipeForm({
          ...recipeForm, 
          ingredients: [...recipeForm.ingredients, ""]
      })
  }

  const handleStep = (event, i) => {
      const stepsArray = [...recipeForm.steps]

      stepsArray[i] = event.target.value

      setRecipeForm({
          ...recipeForm, 
          steps: stepsArray
      })
  }

  const handleStepCount = () => {
      setRecipeForm({
          ...recipeForm, 
          steps: [...recipeForm.steps, ""]
      })
  }

  return (
    <div>
      {/* RECIPE DETAIL */}
      {showRecipeModal &&
        <RecipeModal 
          onCancel={handleCancelRecipe}
          // name={activeRecipe.title}
          name={activeRecipe.event.title}
          imageUrl={activeRecipe.event.extendedProps.imageUrl} 
          plannedDate={activeRecipe.event.date}
        /> 
      }

      {showRecipeCreateModal &&
        <CreateRecipeModal
          open={()=> setShowRecipeCreateModal(true)}
          onOk={() => setShowRecipeCreateModal(false)}
          onCancel={() => setShowRecipeCreateModal(false)}
          onSubmit={handleCreateRecipe}
          recipeNameValue={recipeForm.title}
          recipeNameOnChange={(event) => setRecipeForm({...recipeForm, title: event.target.value})}
          recipeDescriptionValue={recipeForm.description}
          recipeDescriptionOnChange={(event) => setRecipeForm({...recipeForm, description: event.target.value})}
          recipeIngredients={
              recipeForm.ingredients.map((ingredient, i) => (
                  <input 
                      type="text" 
                      key={i}
                      placeholder="Add to list"
                      className='Form-input Form-input-subtle'
                      value={ingredient}
                      onChange={(event) => handleIngredient(event, i)}
                  />
              ))
          }
          handleIngredientCount={handleIngredientCount}
          recipeSteps={
              recipeForm.steps.map((step, i) => (
                  <input 
                      type="text" 
                      key={i}
                      placeholder="Name"
                      className='Form-input'
                      value={step}
                      onChange={(event) => handleStep(event, i)}
                  />
              ))
          }
          handleStepCount={handleStepCount}
        />
      }

      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        // initialView={mobileCheck() ? "dayGridWeek" : "dayGrid"}
        initialView="dayGridWeek"
        events={events}
        dateClick={handleDateClick}
        eventContent={renderEventContent}
        headerToolbar={{
          left: "prev,next,today",
          center: "title",
          right: "dayGridMonth,dayGridWeek,dayGridDay",
        }}
        aspectRatio={2}
        select={handleOpenRecipeCreateModal}
        editable={true}
        selectable={true}
        // dayMaxEvents={true}
      />
    </div>
   
  );
};

export default MealCalendar;