import React from 'react'
import { Link } from 'react-router-dom'
import ListingIndex from '../listings/listing_index'
import profilePic from "../../assets/images/prof-placeholder.png"
import johnProf from "../../assets/images/john-prof.jpeg"


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

    leaveReview() {
        if (!this.props.userSession) {
            return (
                <span></span>
            )
        }else if (this.props.userSession.id === this.props.match.params.userId) {
            return (
                <span></span>
            )
        }else{
            return (
                <Link className='leave-review' to={`/reviews/${this.props.match.params.userId}/new`}>Leave a review for this user</Link>
            )
        }
    };

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
                    <img src={johnProf} alt="" className='prof'/>
                    <li className='username'>Username: {userData.username}</li>
                    <li className='joined'>Joined: {userData.joined}</li>
                    <li className='zipcode'>Zipcode: {userData.zipcode}</li>
                    <li className='rating'>Average Rating: {userData.rating}/5</li>
                    {this.leaveReview()}
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