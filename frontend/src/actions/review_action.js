import * as reviewApiUtils from '../utils/review_utils'

export const CREATE_REVIEW = 'CREATE_REVIEW'
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS'
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW' 
export const DELETE_REVIEW = 'DELETE_REVIEW'
export const UPDATE_REVIEW = 'UPDATE_REVIEW'

const createReview = review => ({
    type: CREATE_REVIEW,
    review
})

const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
})

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
})

const updateReview = review => ({
    type: UPDATE_REVIEW,
    review
})


const removeReview = reviewId => ({
    type: DELETE_REVIEW,
    reviewId
})

export const makeReview = review => dispatch => {
    console.log('make review',review)
    return reviewApiUtils.createReview(review)
     .then(review => {
         console.log('nested make review',review)
        reviewApiUtils.fetchReview(review.data.userId)
            .then(reviews =>
                dispatch(receiveReview(reviews))
            )
     })
}

export const requestReviews = reviews => dispatch => {
    return reviewApiUtils.fetchReviews(reviews)
        .then(reviews => dispatch(receiveReviews(reviews)) )
}


export const requestReview = userId => dispatch => {
    return reviewApiUtils.fetchReview(userId)
        .then(review => dispatch(receiveReview(review)) )
}

export const deleteReview = id => dispatch => {
    return reviewApiUtils.deleteReview(id)
        .then(id => dispatch(removeReview(id)))
}

export const patchReview = review => dispatch => {
    console.log('before nested',review)
    return reviewApiUtils.patchReview(review)
        .then(review => {
            console.log('nested review',review)
            reviewApiUtils.fetchReview(review.data.userId)
                .then(reviews =>
                    dispatch(receiveReview(reviews))
                )
        })
}

