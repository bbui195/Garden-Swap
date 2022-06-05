import { connect } from 'react-redux'
import NavBar from './nav_bar'
import { logoutUser } from '../../actions/session_actions'
import { requestListings } from '../../actions/listing_actions'

const mSTP = state => ({
    currentUser: state.session.currentUser
})

const mDTP = dispatch => ({
    logoutUser: () => dispatch(logoutUser()),
    requestListings: () => dispatch(requestListings()),
})


export default connect(mSTP, mDTP)(NavBar)