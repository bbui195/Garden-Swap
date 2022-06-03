import React from 'react';
import { Link } from 'react-router-dom'

class ListingShow extends React.Component {
    constructor(props) {
        super(props)
        this.renderEditDelete = this.renderEditDelete.bind(this);
    }

    componentDidMount(){
        this.props.requestListing(this.props.listingId)
    }

    handleEdit(){

    }

    renderEditDelete(){
        if (this.props.currentUser.id === this.props.listing.userId){
            return (
                <>
                    <li><Link to={`/listing/edit/${this.props.listingId}`}>Edit</Link></li>
                    <li><button onClick={this.handleDelete}>Delete</button></li>
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
                    {this.renderEditDelete()}
                </ul>
            </div>
        )
    }
}

export default ListingShow