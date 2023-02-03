import React from 'react';
import MealCalendar from '../components/MealCalendar';


const MealPlan = () => {
  return (
    <div className='Page-container'>
      <div className="Page-cover-container">
        <img src={require("../images/food-illos.png")}/>
      </div>
      <div className="Page-medium">
        <div className='Section-hero'>
          <div className='Section-hero-content'>
            <h1>Plan</h1>
            <h2>Plan your weekly meals by drag and dropping recipes, food delivery, and dining out options for the week</h2>
          </div>
        </div>
        <MealCalendar/>
      </div>
    </div>
  );
  
};



function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

export default MealPlan;
