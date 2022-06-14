import React from 'react';
import { Link } from 'react-router-dom';
import ListingIndex from '../listings/listing_index';

import EditReviewForm from '../reviews/edit_review';
import { patchReview } from '../../actions/review_action';

import profilePic from "../../assets/images/prof-placeholder.png";
import johnProf from "../../assets/images/john-prof.jpeg";
import ReviewStarRating from "../reviews/review_star_rating";



class UserShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            reviewId: '',
            userId: ''
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.resetReviewState = this.resetReviewState.bind(this);
    }

    componentDidMount() {
        this.props.requestUser(this.props.match.params.userId)
        this.props.requestReviews(this.props.match.params.userId)
            .then(() => this.setState({
                userId: this.props.match.params.userId
            })
        )
        console.log('did I get to the component did mount?')
    }

    componentDidUpdate() {
        if(this.props.match.params.userId !== this.state.userId) {
            this.props.requestUser(this.props.match.params.userId)
            this.props.requestReviews(this.props.match.params.userId)
                .then(() => this.setState({
                    userId: this.props.match.params.userId
                })
            )
        }
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
            let ret = (
                <Link className='leave-review' to={`/reviews/${this.props.match.params.userId}/new`}>Leave a review for this user</Link>
            )
            Object.values(this.props.reviews??{}).forEach((review) => {
                if(review.reviewerId == this.props.userSession.id) {
                    ret = <span />
                }
            });
            return ret;
        }
    };

    render() {
        if (!this.props.user){
            return null
        };

        const userId = this.props.match.params.userId;
        const userData = this.props.user;
      
        if (!userData) {
            return null
        };

        if (!userData.listings) {
            return null
        };

        let avgReview = 0;
        Object.values(this.props.reviews).forEach(review => {
            console.log(review, 'heheheheheh')
            avgReview += review.rating
        });
        let avgReviewRating = Math.floor(avgReview / Object.values(this.props.reviews).length)
        console.log(avgReviewRating, 'teheheheheh')
        return(
            <div className='user-show-container'>
                <ul className='user-info-container'>
                    <img  src={johnProf} alt="" className='prof'/>
                    <li className='username'>Username: {userData.username}</li>
                    <li className='joined'>Joined: {(new Date(userData.joined)).toDateString().split(" ").slice(1).join(" ")}</li>
                    {/* <li className='zipcode'>Zipcode: {userData.zipcode}</li> */}
                    <li className='avg-rating'>
                        Average Rating:
                        <ReviewStarRating rating={avgReviewRating} 
                            style={{ stroke: "black", strokeWidth: "5"}} 
                        /> 
                        ({Object.values(this.props.reviews).length} reviews ) 
                    </li>
                    {this.leaveReview()}
                
                    {/* <Link to={`/reviews/${this.props.match.params.userId}/new`} className="leave-review">Leave review for this user</Link> */}
                    <h1>User Reviews</h1>
                    {Object.values(this.props.reviews??{}).map((review,idx) => {   
                        return (
                            
                            <div className='user-reviews-container' key={review.id}>
                                {review.id === this.state.reviewId ?  
                                    <EditReviewForm  review={review} action={this.props.editReview} fetchReviews={this.props.requestReviews} resetState={this.resetReviewState} />
                                : 
                                    <div className='user-review'>
                                        <p>{review.timestamps}</p>
                                        <div className='rating'><ReviewStarRating rating={review.rating}/></div>
                                        <p className='body'>{review.body}</p>
                                        <p>{review.username}</p>
                                    </div>
                                }

                                {review.reviewerId === this.props.userSession.id ?
                                    <div className='buttons'>
                                        <button onClick={()=>this.handleRemove(review)}>Delete</button>
                                        {this.state.reviewId !== review.id ?
                                            <button onClick={()=>this.setState({reviewId: review.id})}>Edit</button>
                                            : null
                                        }
                                    </div>
                                    : null
                                }
                            </div>  
                            
                        )
                    })}
                </ul>
            </div>

            
        )
    }
}

export default UserShow