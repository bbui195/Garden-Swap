import React from 'react'
import { connect } from "react-redux";
import { requestListings } from '../../actions/listing_actions'
import ListingIndexItem from '../listings/listing_index_item'

class ListingCategoryIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {

        let listings =  Object.values(this.props.listings)
        let category = this.props.match.params.categoryId

        listings = listings.filter(listing => (
            listing.category === category
        ))
        return (
            <div className='listing-index-container'>
            {listings.map(listing => (
            <ListingIndexItem key={listing.id} listing={listing} />
            ))}
            </div>
        )
    }
}

const mSTP = state => 
{
    return {
        listings: state.entities.listings
    }
}

const mDTP = dispatch => ({
    requestListings: data => dispatch(requestListings(data))
})

export default  connect (mSTP,mDTP)(ListingCategoryIndex)
