import { connect } from 'react-redux'
import { requestListing } from '../../actions/listing_actions' 
import { deleteListing } from '../../actions/listing_actions'
import { patchListing } from '../../actions/listing_actions'
import ListingShow from './listing_show'

const mSTP = (state, ownProps) => {
    return {
        listingId: ownProps.match.params.listingId,
        listing: state.entities.listings.listings[ownProps.match.params.listingId]
    }
}


const mDTP = dispatch => {
    return {
        requestListing: listingId => dispatch(requestListing(listingId)),
        deleteListing: id => dispatch(deleteListing(id)),
        patchListing: listing => dispatch(patchListing(listing))
    }
    
}


export default connect(mSTP,mDTP)(ListingShow)