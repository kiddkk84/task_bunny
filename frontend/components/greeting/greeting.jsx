import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
    <div>
        <nav className="main-nav">
            <Link to="/">
                    <img src="assets/logo.png"/>
            </Link>
            <button>
                <div className="right-nav">
                <ul>  
                    <li><Link to="/login">Log in</Link></li>
    
                    </ul> 
                </div>
            </button>
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
