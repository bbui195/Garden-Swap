import { RECEIVE_USER } from "../actions/user_action";

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let nextState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_USER:
            nextState[action.username] = action.data
            return nextState
        default:
            return oldState;
    }
}

export default usersReducer