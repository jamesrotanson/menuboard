import React, { useState } from 'react';
import { Pencil, ForkKnife, SmileyNervous, XCircle, Heart, FirstAid, UserPlus, Laptop, DeviceTabletCamera, CaretRight } from 'phosphor-react';
import Avatar1 from "../images/memoji-01.png"
import Avatar2 from "../images/memoji-02.png"
import Twemoji from 'react-twemoji';
import Avatar from '../components/Avatar';

const Preferences = () => {

  const preferencesData = [
    {id: 1, name: "James", avatarUrl: Avatar1, mealType: "Classic", allergies: "None", likes: "Seafood", dislikes: "Glutinuous rice", healthCondition: "None"},
    {id: 2, name: "Riho", avatarUrl: Avatar2, mealType: "Vegetarian", allergies: "Banana, Kiwi", likes: "Tofu", dislikes: "Shiitake", healthCondition: "None"}
  ]

  const preferencesCard = preferencesData.map((user) => 
    <div className='Preferences-card Center'>
      <div className='Preferences-header'>
        <Avatar url={user.avatarUrl} size="xLarge"/>
        <h2 className='Text-center'>{user.name}</h2>
        <button className="Button-default"><Pencil size={20}/>Edit preferences</button>
      </div>
      <div className='Preferences-list'>
        <div className='Preferences-item'>
          <ForkKnife size={32}/>
          <h4>Meal type</h4>
          <p>{user.mealType}</p>
          <CaretRight size={32}/>
        </div>
        <div className='Preferences-item'>
          <XCircle size={32}/>
          <h4>Allergies</h4>
          <p>{user.allergies}</p>
          <CaretRight size={32}/>
        </div>
        <div className='Preferences-item'>
          <Heart size={32}/>
          <h4>Likes</h4>
          <p>{user.likes}</p>
          <CaretRight size={32}/>
        </div>
        <div className='Preferences-item'>
          <SmileyNervous size={32}/>
          <h4>Dislikes</h4>
          <p>{user.dislikes}</p>
          <CaretRight size={32}/>
        </div>
        <div className='Preferences-item'>
          <FirstAid size={32}/>
          <h4>Health condition</h4>
          <p>{user.healthCondition}</p>
          <CaretRight size={32}/>
        </div>
      </div>
    </div>
  )

  const devicesData = [
    {id: 1, name: "James's Macbook", icon: "💻", type: "Macbook Pro 15-inch"},
    {id: 2, name: "James's iPhone", icon: "📱", type: "iPhone 14"},
    {id: 3, name: "Riho's Mac", icon: "🖥", type: "Mac"},
    {id: 4, name: "Riho's iPhone", icon: "📱", type: "iPhone XR"},
    
  ]

  const devicesCard = devicesData.map((device) => 
    <div className='Card Device-card'>
      <div className="Device-icon-container">
        <Twemoji options={{ className: 'twemoji' }}>
          <p>{device.icon}</p>
        </Twemoji>
      </div>
      <h4>{device.name}</h4>
      <small>{device.type}</small>
    </div>
  )

  return (
    <div className='Page-container'>
      <div className="Page-cover-container">
        <img src={require("../images/food-illos.png")}/>
      </div>
      <div className='Section-hero'>
        <div className='Section-hero-content'>
          <h1>Preferences</h1>
          <h2>Get personal recommendations based on you and your loved ones' taste</h2>
        </div>
      </div>
      <div className="Page-small">
        <div className='Preferences-card-list'>
          {preferencesCard}          
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <h2>Sync across devices</h2>
        <p>Always know what's on the table everyone, everytime, everywhere </p>
        <br></br>
        <div className="Device-card-list">
          {devicesCard}
        </div>
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="Family-plan-banner"> 
          <img src={require("../images/family-diverse.png")}/>
          <div className='Family-plan-banner-content'>
            <h2>Introducing Family Plan</h2>
            <p>Get everyone on the table for better recommendation on recipes and groceries. <br></br>Costs only 1 coffee per family member per month. </p>
            <button className='Button-primary'>Add family member</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Preferences;
