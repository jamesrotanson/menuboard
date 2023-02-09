import React from 'react';
import Button from '../components/Button';
import Twemoji from 'react-twemoji';
import SearchBar from '../components/SearchBar';
import Recipes from '../data/recipes.json'
import RecipeCard from '../components/RecipeCard';
import AllergiesOptions from '../components/AllergiesOptions';

const AppHome = () => {
  return (
    <div className="Page-container">
        <div className="Page-small">

            <div className='Page-header'>
                <div className='Section-center'>
                    <h5>Let's personalise your experience</h5>
                    <h3>Do you have any food allergies?</h3>
                    <AllergiesOptions/>
                    <div className='Button-group'>
                        <Button name="Skip" appearance="default"/>
                        <Button name="Next" appearance="primary"/>
                    </div>
                </div>
            </div>

            <br></br>

            <h3>Popular recipes</h3>
            <SearchBar placeholder="Search recipes and ingredients" onChange={""} appearance="default"/> 
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

            <br></br>

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