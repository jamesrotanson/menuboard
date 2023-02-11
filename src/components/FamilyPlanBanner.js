import React from 'react'
import Button from './Button'

const FamilyPlanBanner = () => {
  return (
    <div className="Family-plan-banner"> 
        <img src={require("../images/family-diverse.png")}/>
        <div className='Family-plan-banner-content'>
        <h2>Introducing Family Plan</h2>
        <p>Get everyone on the table for better recommendation on recipes and groceries. <br></br>Costs only 1 coffee per family member per month. </p>
        <Button name="Add family member" appearance="primary"/>
        </div>
    </div>
  )
}

export default FamilyPlanBanner