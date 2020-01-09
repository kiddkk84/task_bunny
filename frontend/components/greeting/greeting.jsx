import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
    <nav>
        {/* <Link to="/" className="logo">
            <div className="icon"></div>
            <p className="logoPart1" >Task<span className="logoPart2">Rabbit</span></p>

        </Link> */}
        <Link to="/login" className="menus" >Login</Link>
            &nbsp;or&nbsp;
        <Link to="/signup" >Sign up!</Link>
    </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hello, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
