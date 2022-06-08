import { connect } from 'react-redux'
import ReviewForm from './create_review_form'
import { makeReview } from '../../actions/review_action'


const mSTP = (state, ownProps) => {
    // console.log(state)
    return {
        formType: "Create Review",
        fullName: state.session.currentUser.username,
        review : {
            userId: ownProps.match.params.userId,
            body: '',
            rating: '',

        }
    }
}

const mDTP = dispatch => {
    return {
            action: review => dispatch(makeReview(review))
    }
}

export default connect(mSTP, mDTP)(ReviewForm)