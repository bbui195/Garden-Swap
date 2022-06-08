import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './utils/session';

import { loginUser, logoutUser} from './actions/session_actions';
import './styles/app.scss';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let preloadedState = {};
    window.loginUser = loginUser;
    window.logoutUser = logoutUser;
    if(localStorage.jwtToken) {
        setAuthToken(localStorage.jwtToken);
        const decodedUser = jwt_decode(localStorage.jwtToken);
        preloadedState = { session: { isAuthenticated: true, currentUser: decodedUser }}
    }
    
    const store = configureStore(preloadedState);
    if(localStorage.jwtToken) {
        const decodedUser = jwt_decode(localStorage.jwtToken);
        const currentTime = Date.now() / 1000;
        if (decodedUser.exp < currentTime) {
            store.dispatch(logoutUser());
        }
    }
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.root = root;
    ReactDOM.render(<Root store={store}/>, root);
})