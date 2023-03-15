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
import IngredientItem from "./IngredientItem";

const MealCalendar = (props) => {
  const [events, setEvents] = useState(
    {
      title: "",
      date: "",
      extendedProps: {
        type: "",
        imageUrl: "",
      },
      editable: true,
      ingredients: [],
      steps: [],
      imageUrl: ""
    }
  )

  const [showModal, setShowModal] = useState(false);

  const [activeRecipe, setActiveRecipe] = useState([])

  const handleDateClick = (recipe) => {
    // setEvents([...events, { title: "New Event", date: arg.dateStr }]);
    setShowModal(true);
    setActiveRecipe(recipe)
  };


  // Open recipe detail
  const [showRecipeModal, setShowRecipeModal] = useState(false);
  const handleOpenRecipe = (recipe) => {
    setShowRecipeModal(true)
    setActiveRecipe(recipe)
  }

  const handleCancelRecipe = () => {
    setShowRecipeModal(false)
  }

  const renderEventContent = (recipe) => {
    return (
      <div className="Calendar-event" onClick={() => handleOpenRecipe(recipe)}>
        <img className="Calendar-event-thumbnail" 
          src={recipe.event.extendedProps.imageUrl} 
          // imageUrl={activeRecipe.event.extendedProps.imageUrl} 
          alt="Recipe thumbnail"/>
        <div className="Calendar-event-info">
          <h4>{recipe.event.title}</h4>
          <small>{recipe.event.description}</small>
          {/* <AvatarGroup size="small"/> */}
        </div>
      </div>
    )
  }


  // Define database 
  const recipesCollectionRef = collection(db, "recipes")

  const [recipeForm, setRecipeForm] = useState({
    title: "",
    description: "", 
    ingredients: [], 
    steps: [],
    date: "", 
    imageUrl: ""
  })

  useEffect(() => {
    onSnapshot(recipesCollectionRef, snapshot => {
        setEvents(snapshot.docs.map(doc => {
            return {
                id: doc.id, 
                ...doc.data()
            }
        }))
    })
  }, [])



  // Create recipe
  const [showRecipeCreateModal, setShowRecipeCreateModal] = useState(false)

  const handleOpenRecipeCreateModal = () => {
    setShowRecipeCreateModal(true)
  }


  const handleCreateRecipe =() => {
    addDoc(recipesCollectionRef, recipeForm)
    
    setRecipeForm({
        title: "",
        desc: "", 
        ingredients: [],
        steps: [],
        date: "",
        imageUrl: "",
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


  // Toggle sidebar
  const [planSidebarVisible, setPlanSidebarVisible] = useState(true)
  
  const handleToggleSidebar = () => {
    setPlanSidebarVisible(!planSidebarVisible)
  }

  // Handle add to grocery ingredients list

  const [ingredientsList, setIngredientsList] = useState({
    name: "", 
  });

  const ingredientsCollectionRef = collection(db, "ingredients")


  const handleAddToIngredientsList = (ingredient) => {
    console.log('add')
    addDoc(ingredientsCollectionRef, ingredientsList)
    console.log(ingredient)
    setIngredientsList({
        // ...ingredient,
        name: ingredient,
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
          ingredients={
            <ul>
              {
                activeRecipe.event.extendedProps.ingredients.map((ingredient, i) => (
                  <IngredientItem key={i}
                    ingredientName={ingredient}
                    onClick={() => handleAddToIngredientsList(ingredient)}   
                  />
              ))}
            </ul>
          }
          steps={
            <ol>
              {
                activeRecipe.event.extendedProps.steps.map((step, i) => (
                  <li key={i}>{step}</li>
              ))}
            </ol>
          }
          // description={activeRecipe.event.description}
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
          uploadedImageUrl={recipeForm.imageUrl}
          uploadedImageOnChange={(event) => setRecipeForm({...recipeForm, imageUrl: event.target.value})}
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
          recipeDateValue={recipeForm.date}
          recipeDateOnChange={(event) => setRecipeForm({...recipeForm, date: event.target.value})}
          
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
          // left: "dayGridMonth,dayGridWeek,dayGridDay",
          right: "toggleSidebarButton"
        }}
        aspectRatio={1.6}
        select={handleOpenRecipeCreateModal}
        editable={true}
        selectable={true}
        // dayMaxEvents={true}
        customButtons={{
          toggleSidebarButton: {
            text: 'Saved recipes',
            click: props.toggleSidebar,
          },
        }}
      />
    </div>
   
  );
};

export default MealCalendar;