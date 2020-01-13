import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import { login, signup, logout }from "./actions/session_actions"
import Root from "../frontend/components/root"
import { fetchAllCategories} from './actions/category_actions'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // window.login = login
    // window.signup = signup
    // window.logout = logout
    // window.fetchAllCategories = fetchAllCategories
    

    ReactDOM.render(<Root store={store} />, root);
});