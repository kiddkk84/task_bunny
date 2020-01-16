import React from 'react';
// import { Provider } from 'react-redux';

import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import NeedHelpFormContainer from './needhelp/needhelp_container'
import createTaskContainer from './tasks/create_task_container'
import MapContainer from '../components/tasker/tasker_form'

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <header>
            <GreetingContainer /> 
        </header>
        
        

        <Switch>
            <Route exact path='/' component={NeedHelpFormContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <ProtectedRoute exact path='/createTask/:category_name/' component={createTaskContainer}/>
            <ProtectedRoute exact path='/createTask/' component={createTaskContainer} />
            <ProtectedRoute exact path='/tasker' component={MapContainer} /> 
        </Switch>

    </div>
);

export default App;
