import React, { useState } from 'react';
import '../App.css';
import { CaretRight} from 'phosphor-react';
import { useNavigate} from 'react-router-dom';
import Button from '../components/Button';


const Home = () => {

  const navigate = useNavigate();

  const navigateToAppHome = () => {
    navigate('/app-home');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navigateToRecipes = () => {
    navigate('/recipes');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navigateToPlan = () => {
    navigate('/plan');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navigateToGroceries = () => {
    navigate('/groceries');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  const navigateToInsights = () => {
    navigate('/insights');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navigateToPreferences = () => {
    navigate('/preferences');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navigateToRegister = () => {
    navigate('/register');
  }


  return (
    <div className='Page-container'>
      <div className="Page-small">
        <div className='Section-hero'>
          <div className="Page-cover-container-hero">
            <img src={require("../images/3d-food.png")} alt="illustration"/>
          </div>
          <div className='Section-hero-content'>
            <h5>Introducing</h5>
            <br></br>
            <img src={require("../images/menuboard_logo-full.png")} className="Logo-full" alt="illustration"/>
            <br></br>
            <h1>Organise all your meals in one place</h1>
            <h2>Menuboard helps you and your loved ones plan, organise, and manage your meals in a quick and easy way </h2>
            <div className='Button-group'>
              <Button name="Sign up for free" appearance="primary" onClick={navigateToRegister} iconAfter={<CaretRight/>}/>
              <Button name="Learn more" appearance="default" onClick={navigateToAppHome} iconAfter={<CaretRight/>}/>
            </div>
          </div>
        </div>

        <div className="Section">
          <div className='Section-content-text'>
            <h5>Discover</h5>
            <h2>Recipes without the stress</h2>
            <p>Discover new and classic recipes designed to suit your taste, preferences, allergies, body condition, and habits. No more arguing over what to eat when.</p>
            <br></br> 
            <Button name="Discover recipes" appearance="default" onClick={navigateToRecipes} iconAfter={<CaretRight/>}/>
          </div>
          <div className='Section-content-image'>
            <img src={require("../images/character-recipes.png")} alt="illustration"/>
          </div>
        </div>
        

        <div className='Section'>
          <div className='Section-content-image'>
            <img src={require("../images/character-sushi.png")} alt="illustration"/>
          </div>
          <div className='Section-content-text'>
            <h5>Create</h5>
            <h2>Meal plans simplified</h2>
            <p>Whether you're cooking at home, taking away, or dining out with friends, Menuboard helps you and your loved ones to always know what's on the table.</p>
            <br></br>
            <Button name="Start planning" appearance="default" onClick={navigateToPlan} iconAfter={<CaretRight/>}/>
          </div>
        </div>

        <div className='Section'>
          <div className='Section-content-text'>
            <h5>Order</h5>
            <h2>Groceries in an instant</h2>
            <p>Automatic grocery list based on your planned meals. Reduce food waste and save money.</p>
            <br></br>
            <Button name="Create list" appearance="default" onClick={navigateToGroceries} iconAfter={<CaretRight/>}/>
          </div>
          <div className='Section-content-image'>
            <img src={require("../images/character-grocery.png")} alt="illustration"/>
          </div>
        </div>

        <div className='Section'>
          <div className='Section-content-image'>
            <img src={require("../images/character-insights.png")} alt="illustration"/>
          </div>
          <div className='Section-content-text'>
            <h5>Monitor</h5>
            <h2>Insights to live smarter</h2>
            <p>Get in-depth insights on nutritions, savings, and eating habits to help you and your loved ones live a more well-balanced life. Now that's thought for food.</p>    
            <br></br>
            <Button name="View insights" appearance="default" onClick={navigateToInsights} iconAfter={<CaretRight/>}/>
          </div>
        </div>

        <div className='Section'>
          <div className='Section-content-text'>
            <h5>Personalise</h5>
            <h2>Taste personal, taste together</h2>
            <p>Our AI powered algorithm takes into account not just your taste, preferences, and allergies, but also the weather, season, time of the day, and special occassions to help you discover new recipe</p>
            <br></br>
            <Button name="Set your preferences" appearance="default" onClick={navigateToPreferences} iconAfter={<CaretRight/>}/>
          </div>
          <div className='Section-content-image'>
            <img src={require("../images/character-plan.png")} alt="illustration"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
