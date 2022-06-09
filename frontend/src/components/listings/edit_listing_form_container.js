import { connect } from 'react-redux';
import { testMakeListing } from '../../actions/listing_actions';
import EditListingForm from './edit_listing_form';
import { patchListing, requestListing } from '../../actions/listing_actions';

const mSTP = (state, ownProps) => {
    return {
        listingId: ownProps.match.params.listingId,
        listing: state.entities.listings[ownProps.match.params.listingId],
        currentUserId: state.session.currentUser.id
    }
   
}

const mDTP = dispatch => ({
    patchListing: listing => dispatch(patchListing(listing)),
    requestListing: listingId => dispatch(requestListing(listingId))
})

export default connect(mSTP, mDTP)(EditListingForm);