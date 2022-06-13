import { connect } from 'react-redux'
import { requestListing } from '../../actions/listing_actions'
import { deleteListing } from '../../actions/listing_actions'

import ListingShow from './listing_show'

const mSTP = (state, ownProps) => {
    return {
        listingId: ownProps.match.params.listingId,
        listing: state.entities.listings[ownProps.match.params.listingId],
        currentUser: state.session.currentUser
    }
}


const mDTP = dispatch => {
    return {
        requestListing: listingId => dispatch(requestListing(listingId)),
        deleteListing: id => dispatch(deleteListing(id)),

    }
}


export default connect(mSTP, mDTP)(ListingShow)