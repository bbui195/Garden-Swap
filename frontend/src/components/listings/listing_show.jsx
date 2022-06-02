import React from 'react'

class ListingShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.requestListing(this.props.listingId)
    }

    renderEditDelete(){
        if (this.props.currentUser.id === this.props.listingId){
            return (
                <>
                    <li><button>Edit</button></li>
                    <li><button>Delete</button></li>
                </>
            )
        }else{
            return null
        }
    }

    render() {
        console.log(this.props.listing, "this is the listing on the show page")
        if (!this.props.listing){
            return null
        }
        return (
            <div className='listing-show-container'>
                <p>{this.props.listing.title}</p>
                <ul>
                    <li><img src={this.props.listing.photoUrls}/></li>
                    <li>{this.props.listing.body}</li>
                    <li>{this.props.listing.category}</li>
                    <li>{this.props.listing.price}</li>

                </ul>
            </div>
        )
    }
}

export default ListingShow