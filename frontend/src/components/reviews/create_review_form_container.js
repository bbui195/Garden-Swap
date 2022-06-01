import { connect } from 'react-redux'
import ReviewForm from './create_review_form'
import { makeReview } from '../../actions/review_action'


const mSTP = (state, ownProps) => {
    return {
        formType: "Create Review",
        fullName: state.session.currentUser.name,
        review : {
            product_id: ownProps.match.params.userId,
            comment: '',
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