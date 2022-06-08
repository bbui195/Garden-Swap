import React from 'react';
import { Link } from 'react-router-dom'

class ListingShow extends React.Component {
    constructor(props) {
        super(props)
        this.renderEditDelete = this.renderEditDelete.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount(){
        this.props.requestListing(this.props.listingId)
    }

    handleDelete(){
        this.props.deleteListing(this.props.listingId)
            .then(()=>this.props.history.push('/'))
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
        // console.log(this.props.listing, "this is the listing on the show page")
        if (!this.props.listing){
            return null
        }
        return (
            <div className='listings-show-container'>
                <h1 className='title'>{this.props.listing.title}</h1>
                <ul >
                    <li><img src={this.props.listing.photoUrls}/></li>
                    <li className='body'>{this.props.listing.body}</li>
                    <li className='cat'>{this.props.listing.category}</li>
                    <li className='price'>${this.props.listing.price}</li>
                    <li><Link to={`/user/inbox/${this.props.listing.userId}`}>Message</Link></li>
                    {/* {this.renderEditDelete()} */}
                </ul>
            </div>
        )
    }
}

export default ListingShow