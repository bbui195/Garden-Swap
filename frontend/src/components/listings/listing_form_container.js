import { connect } from 'react-redux';
import { testMakeListing } from '../../actions/listing_actions';
import ListingForm from './listing_form';

const mSTP = (state, ownProps) => {
    return {
        listing: {
            title: "",
            body: "",
            photoUrls: "",
            price: "",
            location: "85203",
            category: ""
        },
        currentUserId: state.session.currentUser.id
    }
}

const mDTP = dispatch => ({
    makeListing: listing => {
        return dispatch(testMakeListing(listing))
    }
})

export default connect(mSTP, mDTP)(ListingForm);