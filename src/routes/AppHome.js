import React, {useState} from 'react';
import Button from '../components/Button';
import Twemoji from 'react-twemoji';
import SearchBar from '../components/SearchBar';
import Recipes from '../data/recipes.json'
import RecipeCard from '../components/RecipeCard';
import AllergiesOptions from '../components/AllergiesOptions';
import Personalisation from '../components/Personalisation';
import FamilyPlanBanner from '../components/FamilyPlanBanner';
import ConnectAppsActions from '../components/ConnectAppsActions';
import LoadingPage from './LoadingPage';

const AppHome = () => {

    const [loading, setLoading] = useState(true)

    setTimeout(() => setLoading(false), 1000);

  return (
    <div>
        {loading ? <LoadingPage/> : 
        <div className="Page-container">
            <div className="Page-small">

            
                <div className='Page-header'>
                    <Personalisation/>
                </div>

            

                <br></br>

                <h3>Popular recipes</h3>
                <SearchBar placeholder="Search recipes and ingredients" onChange={""} appearance="default"/> 
                <ul className='Recipe-card-list'>
                    {
                        Recipes.map(recipe => {
                            return(
                                <RecipeCard 
                                    key={recipe.id}
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
                <br></br>
                <br></br>
                <br></br>

                <div className='Section-grocery flex'>
                    <div className="Section-content-text">
                        <h3>Set up your groceries</h3>
                        <p>Connect to popular grocery service to easily get the ingredients based on your planned meals</p>
                        <ConnectAppsActions/>
                    </div>
                    <img className='Thumbnail' src={require("../images/grocery-illos.png")}/>
                </div>
                
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <FamilyPlanBanner/>
            </div>
        </div>
        }
    </div>
  )
}

export default AppHome