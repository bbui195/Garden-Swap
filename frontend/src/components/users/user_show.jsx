import React from 'react'
import { Link } from 'react-router-dom'
import ListingIndex from '../listings/listing_index'

import EditReviewForm from '../reviews/edit_review'
import { patchReview } from '../../actions/review_action'

import profilePic from "../../assets/images/prof-placeholder.png"
import johnProf from "../../assets/images/john-prof.jpeg"



class UserShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            reviewId: ''
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.resetReviewState = this.resetReviewState.bind(this);
    }

    componentDidMount() {
        this.props.requestUser(this.props.match.params.userId)
        this.props.requestReviews(this.props.match.params.userId)
        console.log('did I get to the component did mount?')
    }

    resetReviewState () {
        this.props.requestReviews(this.props.match.params.userId)
        this.setState({reviewId: ''})
    }

    handleRemove(review) {
        // console.log('review',review)
        this.props.deleteReview(review.id)
    }

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
        // console.log('props',this.props)
        // console.log('reviews',Object.values(this.props.reviews))
        // const userData = Object.values(this.props.user)[0]
        const userData = this.props.user
        // const userListings = userData.listings
        // console.log(userData)
        if (!userData) {
            return null
        }

        if (!userData.listings) {
            return null
        }
        
        console.log('user-show',this.props)
        console.log(this.state);
        return(
            <div className='user-show-container'>
                <ul className='user-info-container'>
                    <img  src={johnProf} alt="" className='prof'/>
                    <li className='username'>Username: {userData.username}</li>
                    <li className='joined'>Joined: {(new Date(userData.joined)).toDateString().split(" ").slice(1).join(" ")}</li>
                    <li className='zipcode'>Zipcode: {userData.zipcode}</li>
                    <li className='rating'>Average Rating: {userData.rating}/5</li>
                    {this.leaveReview()}
                    {/* <div>
                        {userData.listings.map(listing => (
                            <ListingIndex listing={listing} />
                        ))}
                    </div> */}
                    <Link to={`/reviews/${this.props.match.params.userId}/new`} className="leave-review">Leave review for this user</Link>

                    {Object.values(this.props.reviews??{}).map((review,idx) => {   
                        return (
                            <div className='user-reviews-container' key={review.id}>
                                {review.id === this.state.reviewId ?  
                                    <EditReviewForm  review={review} action={this.props.editReview} fetchReviews={this.props.requestReviews} resetState={this.resetReviewState} />
                                : 
                                    <div className='user-review'>
                                        <p>{review.timestamps}</p>
                                        <p className='rating'>rating: {review.rating}</p>
                                        <p className='body'>{review.body}</p>
                                    </div>
                                }

                                {review.reviewerId === this.props.userSession.id ?
                                    <div className='buttons'>
                                        <button onClick={()=>this.handleRemove(review)}>Delete</button>
                                        <button onClick={()=>this.setState({reviewId: review.id})}>Edit</button>
                                    </div>
                                : null
                                }
                            </div>     
                        )
                    })};

                    <Link to={`/reviews/${this.props.match.params.userId}/new`}>Create Review</Link>

                    {/* {Object.values(this.props.reviews??{}).map((review,idx) => 
                    {
                        // console.log('access to what',this.props)
                        return <div key={idx}>
                            {review._id === this.state.reviewId ?  <EditReviewForm/>: <>
                                <p>{review.timestamps}</p>
                                <p>{review.rating}</p>
                                <p>{review.body}</p>
                            </>}

                            {review.userId === this.props.userSession.id ?
                            <div>
                                <button onClick={()=>this.handleRemove(review)}>Delete Review</button>
                                <button onClick={()=>this.setState({reviewId: review._id})}>Edit Button</button>
                            </div>
                            : null
                    }
                        </div>
                    })} */}
                </ul>
            </div>

            
        )
    }
}

export default UserShow