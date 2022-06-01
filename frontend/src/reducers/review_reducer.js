import { 
    CREATE_REVIEW,
    RECEIVE_REVIEWS,
    RECEIVE_REVIEW,
    DELETE_REVIEW,
    UPDATE_REVIEW
} 
from "../actions/review_action"

const reviewReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let nextState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_REVIEWS:
            nextState.reviews = action.reviews
            return nextState
        case CREATE_REVIEW:
            nextState[action.review.id] = action.review
            return nextState
        case DELETE_REVIEW:
            delete nextState[action.id]
            return nextState
        case UPDATE_REVIEW:
            nextState[action.review.id] = action.review
            return nextState
        case RECEIVE_REVIEW:
            nextState[action.review.id] = action.review
            return nextState         
        default:
            return oldState;
    }
}

export default reviewReducer