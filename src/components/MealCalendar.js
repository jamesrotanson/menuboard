import React, { useState, useEffect } from "react";
import '../App.css';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import RichTextEditor from '../components/RichTextEditor';
import Avatar from "./Avatar";
import Avatar1 from "../images/memoji-01.png"
import Avatar2 from "../images/memoji-02.png"
import AvatarGroup from "./AvatarGroup";
import RecipeModal from "./RecipeModal";

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
        daysOfWeek: [ 2, 4 ],
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
        daysOfWeek: [ 5 , 7 ],
      },
      { 
        title: "Bibimbap",
        date: "2023-01-29", 
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

  const handleDateClick = (arg) => {
    // setEvents([...events, { title: "New Event", date: arg.dateStr }]);
    setShowModal(true);
  };


  // OPEN RECIPE DETAIL
  const [showRecipeModal, setShowRecipeModal] = useState(false);
  const handleOpenRecipe = () => {
    setShowRecipeModal(true)
  }

  const handleCancelRecipe = () => {
    setShowRecipeModal(false)
  }

  

  const renderEventContent = (eventInfo) => {
    return (
      <div className="Calendar-event" onClick={handleOpenRecipe}>
        <img className="Calendar-event-thumbnail" src={eventInfo.event.extendedProps.imageUrl}/>
        <div className="Calendar-event-info">
          <h4>{eventInfo.event.title}</h4>
          <small>{eventInfo.event.extendedProps.type}</small>
          <AvatarGroup size="small"/>
        </div>
        
      </div>
    )
  }

  return (
    <div>
      {/* RECIPE DETAIL */}
      {showRecipeModal ? <RecipeModal onCancel={handleCancelRecipe} /> : null}

      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridWeek"
        events={events}
        dateClick={handleDateClick}
        eventContent={renderEventContent}
        header={{
          left: "prev,next,today",
          center: "title",
          right: "dayGridMonth,dayGridWeek,dayGridDay",
        }}
      />
    </div>
   
  );
};

export default MealCalendar;