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


    //need seeds before I can comment out
    render() {
        const {listing} = this.props
        // console.log(listing);
        return( 
            <div>
                <p>Listing items temp</p>
                    <img src={listing.photoUrls}/>
                
                   {/* <Link to={`/listing/${listing.id}`}> src={listing.photoUrls} alt="" /></Link> */}
                   {/* <Link to={`/listing/${listing.id}`}><h1>{listing.title.length > 102 ? listing.title + '...' : listing.title}</h1></Link> */}
                   {/* <p>{listing.location}</p> */}
            </div>    
        )
    }
}

export default ListingIndexItem
