import axios from 'axios'

export const fetchReviews = () => {
    return axios.get('api/reviews/')
}

export const fetchReview = userId => {
    return axios.get(`/api/reviews/${userId}`)
}

export const createReview = review => {
    return axios.post('/api/reviews/',review)
}

export const deleteReview = reviewId => {
    axios.delete(`/api/reviews/${reviewId}`)
}

export const patchReview = review => {
    console.log('patc',review)
    return axios.patch(`/api/reviews/${review._id}`,review)
}

