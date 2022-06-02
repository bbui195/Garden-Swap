import { connect } from 'react-redux'
import ListingIndex from './listing_index'
import { requestListings } from '../../actions/listing_actions'

const toArray = vals => {
    if (vals.length === 0) {
        return []
    } else {
        return Object.values(vals)
    }
}

const mSTP = (state,ownProps) => { 
    let listingsArr;
    if (!state.entities.listings.listings){
        listingsArr = []
    }else{
        listingsArr = Object.values(state.entities.listings.listings)
    }

    return {
        //i'm assuming i have all the listings from enttiies
        listings: listingsArr
    }
}

const mDTP = dispatch => ({
    requestListings: () => dispatch(requestListings()),
});

export default connect(mSTP, mDTP)(ListingIndex);