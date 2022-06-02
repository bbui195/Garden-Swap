import React from 'react'

class ListingShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        console.log(this.props.listingId, "listingId???")
        this.props.requestListing(this.props.listingId)
    }

    render() {
        console.log(this.props.listing, "this is the listing on the show page")
        if (!this.props.listing){
            return null
        }
        return (
            <div className='listing-container'>
                <p>{this.props.listing.title}</p>
                <ul>
                    <li><img src={this.props.listing.photoUrls}/></li>
                    <li>{this.props.listing.body}</li>
                    <li>{this.props.listing.category}</li>
                </ul>
            </div>
        )
    }
}

export default ListingShow