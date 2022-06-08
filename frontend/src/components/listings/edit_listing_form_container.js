import { connect } from 'react-redux';
import { testMakeListing } from '../../actions/listing_actions';
import EditListingForm from './edit_listing_form';
import { patchListing, requestListing } from '../../actions/listing_actions';

const mSTP = (state, ownProps) => {
    console.log(ownProps.match.params.listingId, 'this is the listingId')
    console.log(state.session.currentUser.id, ' this is the current user')
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