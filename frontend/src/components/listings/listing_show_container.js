import { connect } from 'react-redux'
import { requestListing } from '../../actions/listing_actions' 
import { deleteListing } from '../../actions/listing_actions'
import { patchListing } from '../../actions/listing_actions'
import ListingShow from './listing_show'

const mSTP = (state, ownProps) => {

}


const mDTP = dispatch => ({
    requestListing: listingId => dispatch(requestListing(listingId)),
    deleteListing: id => dispatch(deleteListing(id)),
    patchListing: listing => dispatch(patchListing(listing))
})


export default connect(mSTP,mDTP)(ListingShow)