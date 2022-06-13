import React from 'react';
import { Link } from 'react-router-dom'

class ListingShow extends React.Component {
    constructor(props) {
        super(props)
        this.renderEditDelete = this.renderEditDelete.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    };

    componentDidMount() {
        this.props.requestListing(this.props.listingId)
    };

    handleDelete() {
        this.props.deleteListing(this.props.listingId)
            .then(() => this.props.history.push('/'))
    };

    renderEditDelete() {
        if (this.props.currentUser.id === this.props.listing.userId) {
            return (
                <div className='btns-container'>
                    <Link to={`/listing/edit/${this.props.listingId}`} className="button">Edit</Link>
                    <button onClick={this.handleDelete} className="button">Delete</button>
                </div>
            )
        } else {
            return null
        };
    };

    render() {
        if (!this.props.listing) {
            return null
        };

        return (
            <div className='listings-show-container'>
                <div className='left'>
                    <img src={this.props.listing.photoUrls} />
                    {this.renderEditDelete()}
                </div>
                <div className='right'>
                    <h1 className='title'>{this.props.listing.title}</h1>
                    <p className='cat'>{this.props.listing.category}</p>
                    <p className='price'>${this.props.listing.price}</p>
                    <p className='body'>{this.props.listing.body}</p>
                    <Link to={`/user/inbox/${this.props.listing.userId}`}>Message</Link>
                </div>
            </div>
        );
    };
};

export default ListingShow