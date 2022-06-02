import React from 'react'
import { Link } from 'react-router-dom'
import ListingIndexItem from './listing_index_item'

class ListingIndex extends React.Component {
    constructor(props) {
        super(props)
    }


    componentDidMount() {
        this.props.requestListings()
    }

    render() {
        //i'm assuming i have all the listings passed in container
        const { listings } = this.props
        console.log(listings, 'hehehe');
        let listingsArr;
        if (listings.length > 0){
            listingsArr = listings[0].data;
        }else{
            listingsArr = []
        }
        // 
        console.log(listingsArr, 'this is me');
        return(
            <div>
                {listingsArr.map(listing => (
                    <ListingIndexItem key={listing.id} listing={listing} />
                ))}
            </div>
        )
    }
}

export default ListingIndex