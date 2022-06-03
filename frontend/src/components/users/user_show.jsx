import React from 'react'
import { Link } from 'react-router-dom'
import ListingIndex from '../listings/listing_index'

class UserShow extends React.Component {
    constructor(props) {
        super(props)

        // this.handleRemove = this.handleRemove.bind(this)
    }

    componentDidMount() {
        this.props.requestUser(this.props.match.params.userId)
    }

    // handleRemove(review) {
    //     this.props.deleteReview(review.id)
    // }

    render() {
        if (!this.props.user){
            return null
        }

        const userId = this.props.match.params.userId 
        console.log('props',this.props)
        console.log('reviews',Object.values(this.props.reviews))
        const userData = Object.values(this.props.user)[0]
        // const userListings = userData.listings
        // console.log(userData)
        if (!userData) {
            return null
        }

        if (!userData.listings) {
            return null
        }
       
        return(
            <div className='user-show-container'>
                <ul className='user-info-container'>
                    <li>Username: {userData.username}</li>
                    <li>Joined: {userData.joined}</li>
                    <li>Zipcode: {userData.zipcode}</li>
                    <li>Rating: {userData.rating}</li>

                    {/* <div>
                        {userData.listings.map(listing => (
                            <ListingIndex listing={listing} />
                        ))}
                    </div> */}

                    <Link to={`/reviews/${this.props.match.params.userId}/new`}>Create Review</Link>

                    {Object.values(this.props.reviews??{}).map((review,idx) => 
                    {
                        return <div>
                            <p>{review.timestamps}</p>
                            <p>{review.rating}</p>
                            <p>{review.body}</p>

                            {review.userId === this.props.UserSession.id ?
                            <div>
                                <button onClick={()=>this.handleRemove(review)}>Delete Review</button>
                                <Link to={`/reviews/${review.id}/edit`}>Edit Button</Link>
                            </div>
                            : null
                    }
                        </div>     
                    })}
                </ul>
            </div>

            
        )
    }
}

export default UserShow