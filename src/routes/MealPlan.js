import React, {useState} from 'react';
import MealCalendar from '../components/MealCalendar';
import Button from '../components/Button';
import { Export } from 'phosphor-react';
import SearchBar from '../components/SearchBar';
import LoadingPage from './LoadingPage';
import { useSelector } from 'react-redux';
import RecipeCard from '../components/RecipeCard';


const MealPlan = () => {
  const [loading, setLoading] = useState(true)

  setTimeout(() => setLoading(false), 1400);

  const recipeList = useSelector((state) => state.recipe.recipeList)

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
                  <p>Plan your weekly meals by drag and dropping recipes, food delivery, and dining out options for the week</p>
                </div>
              </div>
              <Button appearance="primary" name="Share" iconBefore={<Export/>}/>
            </div>
            <SearchBar placeholder="Search recipes and ingredients" onChange={""} appearance="default"/>   
            <MealCalendar/>
            
          </div>
        </div>
        <div className='Plan-sidebar'>
            <h3>Unscheduled meals</h3>
            {
              recipeList.map((recipe) => {
                return(
                  // <div>{recipe.recipeName}</div>
                  <RecipeCard 
                      key={recipe.id}
                      name={recipe.recipeName}
                      imageUrl={recipe.imageUrl}
                      cost={recipe.cost}
                      time={recipe.time}
                  />
              )
              })
            }
        </div>
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
