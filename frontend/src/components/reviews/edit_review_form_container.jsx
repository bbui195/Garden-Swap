import React from 'react'
import { connect } from 'react-redux'
import { requestReview, patchReview } from '../../actions/review_action'
import { withRouter } from 'react-router-dom'
import EditReviewForm from './edit_review'


const mSTP = (state, ownProps) => {
    return {
        formType: 'Edit Form',
        review: state.entities.reviews[ownProps.match.params.reviewId]
    }
}

const mDTP = dispatch => ({
    getReview: reviewId => dispatch(requestReview(reviewId)),
    action: review => dispatch(patchReview(review))
})

export default withRouter(connect(mSTP, mDTP)(EditReviewForm))



