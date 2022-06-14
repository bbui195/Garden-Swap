import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SearchPage from "./search_page";
import { fetchListingsBySearch } from '../../actions/listing_actions'

const mSTP = state => ({
    listings: Object.values(state.entities.listings)
});

const mDTP = dispatch => ({
    fetchListingsBySearch: listings => dispatch(fetchListingsBySearch(listings)) 
});

export default withRouter(connect(mSTP, mDTP)(SearchPage))