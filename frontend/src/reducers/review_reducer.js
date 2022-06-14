import { 
    CREATE_REVIEW,
    RECEIVE_REVIEWS,
    RECEIVE_REVIEW,
    DELETE_REVIEW,
    UPDATE_REVIEW
} 
from "../actions/review_action"

const reviewReducer = (oldState = {}, action) => {
    // console.log(action, "in the review reducer top")
    Object.freeze(oldState)
    let nextState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_REVIEWS:
            // nextState = action.reviews.data.reviews;
            // return nextState
            return Object.assign({}, oldState, action.reviews.data)
        case CREATE_REVIEW:
            nextState[action.review.id] = action.review
            return nextState
        case DELETE_REVIEW:
            delete nextState[action.reviewId]
            return nextState
        case UPDATE_REVIEW:
            nextState[action.review.id] = action.review
            return nextState
        case RECEIVE_REVIEW:
            if (!action.review.data[0]) {
                return Object.assign({}, oldState, {[action.review.data._id]: action.review.data});
            }
            return Object.assign({}, oldState, {[action.review.data[0]._id]: action.review.data[0]});
            // console.log(action.review.data, 'this is tghe action.review.data')
            // nextState.push(action.review.data);  // this is the mistake
            // return nextState         
        default:
            return oldState;
    }
}

export default reviewReducer