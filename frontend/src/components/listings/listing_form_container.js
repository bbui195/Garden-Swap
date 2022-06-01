import { connect } from 'react-redux';
import { testMakeListing } from '../../actions/listing_actions';
import ListingForm from './listing_form';

const mSTP = (state, ownProps) => ({
    listing: {
        title: "",
        body: "",
        photoUrls: "",
        price: "",
        location: "85203",
        category: ""
    }
})

const mDTP = dispatch => ({
    makeListing: listing =>{
        // for(let val of listing.values()) {
        //     console.log(val);
        // }
        dispatch(testMakeListing(listing))
    }
})

export default connect(mSTP, mDTP)(ListingForm);