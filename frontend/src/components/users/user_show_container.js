import { connect } from 'react-redux'
import UserShow from './user_show'
import { deleteReview, requestReviews } from '../../actions/review_action'
import { patchReview } from '../../actions/review_action'
import { requestUser } from '../../actions/user_action'
import { requestReview } from '../../actions/review_action'

const mSTP = state => { 
    return {
        user: state.entities.users,
        userSession: state.session.currentUser,
        reviews: state.entities.reviews
    }
}

const mDTP = dispatch => ({
    deleteReview: id=> dispatch(deleteReview(id)),
    editReview: review => dispatch(patchReview(review)),
    requestUser: userId => dispatch(requestUser(userId)),
    requestReview: userId => dispatch(requestReview(userId))
})

export default connect(mSTP,mDTP)(UserShow)