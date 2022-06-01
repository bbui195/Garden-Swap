import { connect } from 'react-redux'
import ListingIndex from './listing_index'
import { requestListings } from '../../actions/listings_action'

const toArray = vals => {
    if (vals.length === 0) {
        return []
    } else {
        return Object.values(vals)
    }
}

const mSTP = state => { 
    return {
        //i'm assuming i have all the listings from enttiies
        listings: toArray(state.entities.listings),
    }
}

const mDTP = dispatch => ({
    requestListings: () => dispatch(requestListings()),
})

export default connect(mSTP,mDTP)(ListingIndex)