import React from 'react'
import { Link } from 'react-router-dom'
import ListingIndexItem from './listing_index_item'

class ListingIndex extends React.Component {
    constructor(props) {
        super(props)
    }


    componentDidMount() {
        // let filter = {}
        
        this.props.requestListings()
        console.log('mount',this.props)
    }

    render() {
        //i'm assuming i have all the listings passed in container
        const { listings } = this.props
        console.log(listings, 'hehehe');
        return(
            <div>
                {listings.map(listing => (
                    <ListingIndexItem key={listing.id} listing={listing} />
                ))}
            </div>
        )
    }
}

export default ListingIndex