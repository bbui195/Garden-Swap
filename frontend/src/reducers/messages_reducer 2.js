import { RECEIVE_MESSAGE, RECEIVE_MESSAGES } from "../actions/message_actions";

const messagesReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_MESSAGE:
            let msg = action.message;
            let newState = Object.assign({}, state);
            if(msg.body === "") {
                delete newState[msg.id];
            } else {
                Object.assign(newState, {[msg.id]: msg});
            }
            return newState;
        case RECEIVE_MESSAGES:
            return Object.assign({}, state, action.messages);
        default:
            return state;
    }
};

export default messagesReducer;