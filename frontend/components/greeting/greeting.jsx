import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
    <div>
        <nav className="main-nav">
            <Link to="/">
                    <img src="assets/logo.png"/>
            </Link>
                <div className="right-nav">
                <ul>  
                        <li><Link to="/" style={{ textDecoration: 'none', color: 'darkolivegreen' }} >Services</Link></li>
                        <li><Link to="/login" style={{ textDecoration: 'none', color: 'darkolivegreen' }} >Log in</Link></li>
                        <button>Become a Tasker</button>
                </ul> 
                </div>
        </nav>
        

    </div>
    );
    const personalGreeting = () => (

    <div>
        <nav className='main-nav'>
                <Link to="/">
                    <img src="assets/logo.png" />
                </Link>
            <div className="right-nav">
        
            <ul>
            <li>
                
                <Link to="/login" style={{ textDecoration: 'none', color: 'darkolivegreen' }} >
                    Free Credit
                </Link></li>
                
            <li>
                <Link to="/createTask" style={{ textDecoration: 'none', color: 'darkolivegreen' }}>
                    Book a Task
                </Link></li>
            
            <li>
                <Link to="/tasks" style={{ textDecoration: 'none', color: 'darkolivegreen' }}>
                    My Tasks
                </Link></li>
            <li>
                <Link to="/tasks" style={{ textDecoration: 'none', color: 'darkolivegreen' }}>
                    Account
                </Link></li>
                        <button>
                            <div className="menustaskercomp" onClick={logout}>Log Out</div>
                        </button>
            </ul>
                
                </div>
    </nav>
    

    </div>
            
                );      

    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
