import React, {useState} from 'react';
import MealCalendar from '../components/MealCalendar';
import Button from '../components/Button';
import { Export } from 'phosphor-react';
import SearchBar from '../components/SearchBar';
import LoadingPage from './LoadingPage';
import { useSelector } from 'react-redux';
import RecipeCard from '../components/RecipeCard';
import UnscheduledSidebar from '../components/UnscheduledSidebar';
import FeedbackCollector from '../components/FeedbackCollector';


const MealPlan = () => {
  const [loading, setLoading] = useState(true)

  setTimeout(() => setLoading(false), 1400);

  const recipeList = useSelector((state) => state.recipe.recipeList)
  const unscheduledRecipeList = useSelector((state) => state.recipe.unscheduledRecipeList)

  return (
    <div>
      {loading ? <LoadingPage/> : 
      <div className='Plan-page-container'>
        <div className='Page-container'>
          <div className="Page-medium">
            <div className="Page-header">
              <div className="Page-title">
                <div>
                  <h2>Plan</h2>
                  {/* <p>Plan your weekly meals by drag and dropping recipes, food delivery, and dining out options for the week</p> */}
                </div>
              </div>
              <SearchBar placeholder="Search recipes and ingredients" onChange={""} appearance="default"/>   
            
            </div>
            <MealCalendar/>
            <FeedbackCollector/>
          </div>
        </div>
          <UnscheduledSidebar/>
        </div>
      }
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
