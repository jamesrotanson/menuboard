import React, { useState } from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import AllergiesOptions from './AllergiesOptions';
import CuisinesOptions from './CuisinesOptions';
import DietOptions from './DietOptions';
import FoodAvoidOptions from './FoodAvoidOptions';
import CookingLevelOptions from './CookingLevelOptions';
import CookingGoalOptions from './CookingGoalOptions';

const Personalisation = () => {
    const [personalisationStep, setpersonalisationStep] = useState(1)

    const handleNext = () => {
        setpersonalisationStep(personalisationStep + 1);
    }

    const handlePrev = () => {
        setpersonalisationStep(personalisationStep - 1);
        if(personalisationStep < 0){
            setpersonalisationStep(personalisationStep = 1)
        }
    }

    const navigate = useNavigate();

    const handleDone = () => {
        navigate('/recipes');
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div className="Section-center"> 
            <h5>Let's personalise your experience</h5>
            {
                personalisationStep === 1 && (
                    <div className="Section-center">
                        <h3>What are your favourite cuisines? </h3>
                        <CuisinesOptions/>
                        <div className='Button-group'>
                            <Button name="Next" appearance="primary" onClick={handleNext}/>
                        </div>
                    </div>
                )
            }
            {
                personalisationStep === 2 && (
                    <div className="Section-center">
                        <h3>Do you have any food allergies?</h3>
                        <AllergiesOptions/>
                        <div className='Button-group'>
                            <Button name="Back" appearance="default" onClick={handlePrev}/>
                            <Button name="Next" appearance="primary" onClick={handleNext}/>
                        </div>
                    </div>
                )
            }
            {
                personalisationStep === 3 && (
                    <div className="Section-center">
                        <h3>Do you follow any of these diets?</h3>
                        <DietOptions/>
                        <div className='Button-group'>
                            <Button name="Back" appearance="default" onClick={handlePrev}/>
                            <Button name="Next" appearance="primary" onClick={handleNext}/>
                        </div>
                    </div>
                )
            }
            {
                personalisationStep === 4 && (
                    <div className="Section-center">
                        <h3>Any ingredients you don't want to see in recommended recipes?</h3>
                        <FoodAvoidOptions/>
                        <div className='Button-group'>
                            <Button name="Back" appearance="default" onClick={handlePrev}/>
                            <Button name="Next" appearance="primary" onClick={handleNext}/>
                        </div>
                    </div>
                )
            }
            {
                personalisationStep === 5 && (
                    <div className="Section-center">
                        <h3>How would you describe your cooking skills?</h3>
                        <CookingLevelOptions/>
                        <div className='Button-group'>
                            <Button name="Back" appearance="default" onClick={handlePrev}/>
                            <Button name="Next" appearance="primary" onClick={handleNext}/>
                        </div>
                    </div>
                )
            }
            {
                personalisationStep === 6 && (
                    <div className="Section-center">
                        <h3>What are your cooking goals?</h3>
                        <CookingGoalOptions/>
                        <div className='Button-group'>
                            <Button name="Back" appearance="default" onClick={handlePrev}/>
                            <Button name="Done" appearance="primary" onClick={handleDone}/>
                        </div>
                    </div>
                )
            }
            <small>{personalisationStep} of 7</small>
    </div>
  ) 
}

export default Personalisation