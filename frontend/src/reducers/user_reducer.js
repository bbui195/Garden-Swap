import { RECEIVE_MESSAGES } from "../actions/message_actions";
import { RECEIVE_USER } from "../actions/user_action";

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let nextState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_USER:
            nextState[action.user.id] = action.user
            return nextState;
        case RECEIVE_MESSAGES:
            Object.assign(nextState, action.users);
            // nextState[action.receiver.id] = action.receiver
            return nextState;
        default:
            return oldState;
    }
}

export default usersReducer
