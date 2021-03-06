import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import Root from './components/root'
import { loginUser, logoutUser} from './actions/session_actions'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root')
    let preloadedState = {};
    window.loginUser = loginUser
    window.logoutUser = logoutUser
   
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        }
    }
    const store = configureStore(preloadedState)
    window.store = store
    window.getState = store.getState
    window.dispatch = store.dispatch
    window.root = root;
    ReactDOM.render(<Root store={store}/>, root)
})