import React from 'react';
import MealCalendar from '../components/MealCalendar';
import Button from '../components/Button';
import { Export } from 'phosphor-react';
import SearchBar from '../components/SearchBar';


const MealPlan = () => {
  return (
    <div className='Page-container'>
      <div className="Page-medium">
        <div className="Page-header">
          <div className="Page-title">
            <div>
              <h2>Plan</h2>
              <p>Plan your weekly meals by drag and dropping recipes, food delivery, and dining out options for the week</p>
            </div>
          </div>
          <Button appearance="primary" name="Share" iconBefore={<Export/>}/>
        </div>
        <SearchBar placeholder="Search recipes and ingredients" onChange={""} appearance="default"/>   
        <MealCalendar className="Plan-calendar-container"/>
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
