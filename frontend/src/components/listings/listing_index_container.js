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
    return {
        listings: Object.values(state.entities.listings[0])
    };
}

const mDTP = dispatch => ({
    requestListings: () => dispatch(requestListings()),
});

export default connect(mSTP, mDTP)(ListingIndex);