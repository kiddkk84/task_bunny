import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
    <div>
        <nav className="main-nav">
            <Link to="/">
                    <img src="assets/logo.png" className="img"/>
            </Link>

                <div className="right-nav">
                <Link to="/login">Login</Link>
                    &nbsp;or&nbsp;
                <Link to="/signup" >Sign up!</Link>
            </div>
        </nav>

    </div>
    );
    const personalGreeting = () => (
        <hgroup>
            <h2>Hello, {currentUser.username}!</h2>
            <button onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
