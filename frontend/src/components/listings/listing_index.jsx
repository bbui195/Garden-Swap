import React from 'react'
import { Link } from 'react-router-dom'

class ListingIndex extends React.Component {
    constructor(props) {
        super(props)
    }


    componentDidMount() {
        this.props.requestListings()
    }

    render() {
        //i'm assuming i have all the listings passed in container
        const {listings} = this.props
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