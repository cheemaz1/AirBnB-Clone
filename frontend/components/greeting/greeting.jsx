import React from "react";
import { withRouter } from 'react-router-dom';
import Dropdown from "react-dropdown";
import SearchContainer from "../search/search_container";


const Greeting = ({ currentUser, logout, openModal }) => {
    // const sessionLinks = () => (
    //     <nav className="login-signup">
    //         <select>
    //         <button onClick={() => openModal('login')}>Login</button>
    //         &nbsp;or&nbsp;
    //         <button onClick={() => openModal('signup')}>Signup</button>

    //         </select>
    //         {/* <img className="splashbg" src={window.bg} alt="BG" /> */}
    //     </nav>
        
     
    // );
    const sessionLinks = () => (
        <ul className="login-signup-ul">
            <li className="menu-li" onClick={() => openModal("login")}>
                Log In
            </li>
            <li className="menu-li" onClick={() => openModal("signup")}>
                Sign Up
            </li>
        </ul>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return (
        
        currentUser ?
            personalGreeting(currentUser, logout) :
            sessionLinks()
    );
};


export default Greeting;
