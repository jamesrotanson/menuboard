import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IconContext, House, CookingPot, Notepad, ShoppingCart, ChartPie, FadersHorizontal, CaretRight} from 'phosphor-react';
import '../App.css';
import Button from '../components/Button';


const MainNavigation = () => {
    return(
        <IconContext.Provider value={{color: "#000", size: 24, weight: "bold"}}>
            <nav>
                <ul 
                    // id="nav-list"
                    className="Main-nav-container"
                >
                    <li className="Main-nav-tab"><a href="./home"><House/> Home </a></li>
                    <li className="Main-nav-tab"><a href="./recipes"> <CookingPot/> Recipes </a></li>
                    <li className="Main-nav-tab"><a href="./plan"> <Notepad/> Plan </a></li>
                    <li className="Main-nav-tab"><a href="./groceries"> <ShoppingCart/> Grocery </a></li>
                    <li className="Main-nav-tab"><a href="./insights"> <ChartPie/> Insights </a></li>
                    <li className="Main-nav-tab"><a href="./preferences"> <FadersHorizontal/> Preferences </a></li>
                    <Button name="Try free" appearance="primary"/>
                </ul>
            </nav>
        </IconContext.Provider>
        )
    }
    

export default MainNavigation