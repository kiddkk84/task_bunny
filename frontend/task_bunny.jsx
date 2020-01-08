import React from "react";
import ReactDOM from "react-dom";
// import {signup, logout} from "../frontend/util/session_api_util"
import configureStore from './store/store';
import {login} from "./actions/session_actions"
import Root from "../frontend/components/root"

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login 
    // window.signup = signup
    // window.logout = logout

    ReactDOM.render(<Root store={store} />, root);
});