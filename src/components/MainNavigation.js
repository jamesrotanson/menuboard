import React, { useState, useEffect } from "react";
import { IconContext, House, CookingPot, CalendarBlank, ShoppingCart, ChartPie, FadersHorizontal} from 'phosphor-react';
import '../App.css';
import Button from '../components/Button';
import Avatar from "./Avatar";
import Avatar1 from "../images/memoji-01.png"
import { useNavigate } from "react-router-dom";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
import {auth} from '../firebase-config';
import { signOut } from "firebase/auth";



const MainNavigation = (props) => {

    const [buttonVisible, setButtonVisible] = useState(true)
    const [avatarVisible, setAvatarVisible] = useState(false)


    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
        window.scrollTo({
            top: 0,
            behaviour: 'smooth',
        });
        // setIsLoggedIn(true)
    };

    const navigateToRegister = () => {
        navigate('/register');
        window.scrollTo({
            top: 0,
            behaviour: 'smooth',
        });
    };

    const logout = async () => {

        await signOut(auth);
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
                    
                    {isLoggedIn ? (
                            <>
                                
                                <Button name="Sign out" appearance="default" onClick={logout}/>
                            </>
                            
                        ) : (
                            <>
                                <div className="Auth-buttons-nav-container">
                                    <Button name="Login" appearance="default" onClick={handleLogin}/>
                                    <Button name="Register" appearance="primary" onClick={navigateToRegister}/>
                                </div>
                            </>
                        )
                    }
                </ul>
            </nav>
        </IconContext.Provider>
        )
    }
    

export default MainNavigation