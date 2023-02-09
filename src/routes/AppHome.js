import React from 'react';
import Button from '../components/Button';
import Twemoji from 'react-twemoji';
import SearchBar from '../components/SearchBar';
import Recipes from '../data/recipes.json'
import RecipeCard from '../components/RecipeCard';

const AppHome = () => {
  return (
    <div className="Page-container">
        <div className="Page-small">

            <div className='Page-header'>
                <div className='Page-title'>
                    <div>
                        <h2>
                            <Twemoji options={{className: 'Twemoji-small'}}>☀️</Twemoji>
                            Good morning
                        </h2>
                        
                    </div>
                </div>
            </div>

            <SearchBar placeholder="Search recipes and ingredients" onChange={""} appearance="default"/>   

            <br></br>

            <h3>Popular recipes</h3>
            <Button appearance="default" name="View all recipes"/>
            <ul className='Recipe-card-list'>
                {
                    Recipes.map(recipe => {
                        return(
                            <RecipeCard 
                                name={recipe.name}
                                imageUrl={recipe.imageUrl}
                                cost={recipe.cost}
                                time={recipe.time}
                                // ingredients={recipe.ingredients.map(ingredient => {
                                //     return(
                                //         <div>
                                //             {ingredient.name}
                                //         </div>
                                //     )
                                // })}
                            />
                        )
                    })
                }
            </ul>

            <div>
                <h5>Personalise your experience</h5>
                <h3>What are your favourite cuisines?</h3>
                <ul>
                    <li>Japanese</li>
                    <li>Indonesian</li>
                </ul>
            </div>

            <div>
                <h3>Do you have any food allergies?</h3>
                <ul>
                    <li>Japanese</li>
                    <li>Indonesian</li>
                </ul>
            </div>

            <div>
                <h3>Set up your groceries</h3>
                <ul>
                    <li>Connect with Woolworths</li>
                    <li>Connect with Coles</li>
                    <li>Connect with InstaCart</li>
                </ul>
            </div>

            <div>
                Family plan banner
            </div>

        </div>
    </div>
  )
}

export default AppHome