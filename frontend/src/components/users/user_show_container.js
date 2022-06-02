import { connect } from 'react-redux'
import UserShow from './user_show'
import { deleteReview } from '../../actions/review_action'
import { patchReview } from '../../actions/review_action'

const mSTP = state => { 
    return {
        user: state.entities.user,
        userSession: state.session.currentUser
    }
}

const mDTP = dispatch => ({
    deleteReview: id=> dispatch(deleteReview(id)),
    editReview: review => dispatch(patchReview(review))
})

export default connect(mSTP,mDTP)(UserShow)