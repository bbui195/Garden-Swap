import { CLEAR_ERRORS, RECEIVE_SESSION_ERRORS } from "../actions/session_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const sessionErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors
        case RECEIVE_CURRENT_USER:
            return []
        case CLEAR_ERRORS:
            return []
        default:
            return oldState;
    }
}


export default sessionErrorsReducer