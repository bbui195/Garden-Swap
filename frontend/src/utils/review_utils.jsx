import axios from 'axios'

export const fetchReviews = () => {
    return axios.get('api/reviews/')
}

export const fetchUserReviews = userId => {
    return axios.get(`/api/reviews/${userId}`)
}

export const createReview = review => {
    return axios.post('/api/reviews/',review)
}

export const deleteReview = reviewId => {
    return axios.delete(`/api/reviews/${reviewId}`)
}

export const patchReview = review => {
    console.log(review, "this is the review");
    return axios.patch(`/api/reviews/${review.id}`, review)
}

