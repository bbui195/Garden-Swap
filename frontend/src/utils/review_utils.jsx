import axios from 'axios'

export const fetchReviews = () => {
    return axios.get('api/reviews/')
}

export const fetchReview = reviewId => {
    return axios.get(`/api/reviews/${reviewId}`)
}

export const createReview = review => {
    return axios.post('/api/review/',review)
}

export const deleteReview = reviewId => {
    axios.delete(`/api/reviews/${reviewId}`)
}

export const patchReview = review => {
    return axios.patch(`/api/reviews/${review.id}`,review)
}

