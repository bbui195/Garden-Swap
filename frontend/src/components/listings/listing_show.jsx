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
        if (this.props.currentUser && this.props.currentUser.id === this.props.listing.userId) {
            return (
                <div className='btns-container'>
                    <Link to={`/listing/edit/${this.props.listingId}`} className="button">Edit</Link>
                    or
                    <button onClick={this.handleDelete} className="button">Delete</button>
                    your post
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
                    <Link to='/' className='linky'>
                        <i class="fa-solid fa-backward"></i>
                        Back to listings
                    </Link>
                    <img src={this.props.listing.photoUrls} />
                    {this.renderEditDelete()}
                </div>
                <div className='right'>
                    <div className='headline'>
                        <div className='space-btwn'>
                            <h1 className='title'>{this.props.listing.title}</h1>
                            <p className='price'>${this.props.listing.price}</p>
                        </div>
                        <p className='cat'>{this.props.listing.category}</p>
                    </div>
                    <div className='list-body'>
                        <h3>Description:</h3>
                        <p className='body'>{this.props.listing.body}</p>
                    </div>
                    {this.props.currentUser && this.props.listing.userId !== this.props.currentUser.id ?
                        <Link to={`/user/inbox/${this.props.listing.userId}`} className='button'>
                            Message {this.props.listing.username}
                        </Link> :
                        null
                    }
                </div>
            </div>
        );
    };
};

export default ListingShow