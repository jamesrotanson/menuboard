import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IconContext, House, CookingPot, CalendarBlank, ShoppingCart, ChartPie, FadersHorizontal} from 'phosphor-react';
import '../App.css';
import Button from '../components/Button';
import Avatar from "./Avatar";
import Avatar1 from "../images/memoji-01.png"



const MainNavigation = () => {

    const [buttonVisible, setButtonVisible] = useState(true)
    const [avatarVisible, setAvatarVisible] = useState(false)

    const handleLogin = () => {
        setButtonVisible(false);
        setAvatarVisible(true);
    }
    
    const handleLogout = () => {
        setButtonVisible(true);
        setAvatarVisible(false);
    }

    return(
        <IconContext.Provider value={{color: "#000", size: 24, weight: "bold"}}>
            <nav>
                <ul 
                    // id="nav-list"
                    className="Main-nav-container"
                >
                    <li className="Main-nav-tab"><a href="./"><img src={require("../images/small-logo.png")} className="Logo-small"/> </a></li>
                    <li className="Main-nav-tab"><a href="./app-home"><House/><p>Home</p></a></li>
                    <li className="Main-nav-tab"><a href="./recipes"> <CookingPot/><p>Recipes</p></a></li>
                    <li className="Main-nav-tab"><a href="./plan"> <CalendarBlank/><p>Plan</p></a></li>
                    <li className="Main-nav-tab"><a href="./groceries"> <ShoppingCart/><p>Grocery</p></a></li>
                    <li className="Main-nav-tab"><a href="./insights"> <ChartPie/><p>Insights</p></a></li>
                    <li className="Main-nav-tab"><a href="./preferences"> <FadersHorizontal/><p>Preferences</p></a></li>
                    {/* <Button name="Try free" appearance="primary" onClick={handleLogin}/> */}
                    {buttonVisible ? <Button name="Try free" appearance="primary" onClick={handleLogin}/> : null}
                    {avatarVisible ? <Avatar url={Avatar1} size="medium" onClick={handleLogout}/> : null}
                </ul>
            </nav>
        </IconContext.Provider>
        )
    }
    

export default MainNavigation