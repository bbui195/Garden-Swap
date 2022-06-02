import React from 'react'
import { Link } from 'react-router-dom'


class ListingIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.titleChopper = this.titleChopper.bind(this)
    }


    titleChopper(title) {
        if (title.length > 25) {
            title = title.substring(0,24) + "..."
            return title
        } else {
            return title
        }
    }


    render() {
        const {listing} = this.props
        return( 
            <Link to={`/listing/${listing.id}`} className='listing-container'>
                <img src={listing.photoUrls}/>               
                <p className='title'>{listing.title}</p> 
                <p className='price'>${listing.price}</p>    
                <p className='location'>Zip Code: {listing.location}</p>               
            </Link>    
        )
    }
}

export default ListingIndexItem
