import React from 'react';
import Rating from './stars';
import { withRouter } from 'react-router-dom';



class EditReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.review.id,
            userId: this.props.review.userId,
            rating: this.props.review.rating,
            body: this.props.review.body,
            error_rating: "Rating required",
            error_comment: false,
            show_errors: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRating = this.handleRating.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault()

        if (!this.state.body) {
            this.setState({show_errors: true})
        }

        const has_errors = (
            this.state.error_rating || this.state.error_comment
        )

        if (has_errors) {
            this.setState({show_errors:true})
            return
        }

        this.props.action(Object.assign({}, this.state))
            .then(() => this.props.resetState())
    }

    handleRating(rating) {
        if (rating <= 0) {
            this.setState({error_rating: "Star rating is required"})
        } else {
            this.setState({error_rating: false})
            this.setState({rating:rating })
            console.log(this.state.error_rating)

        }
        return this.setState({rating: rating })
    }

    handleChange(field) {
        return e => {
            let value = e.currentTarget.value

            if (field === 'body') {
                if (value.length <= 0) {
                    this.setState({error_comment: "Comment cannot be blank"})
                } else {
                    // console.log('body',this.state.body)
                    this.setState({error_comment: false})
                    // console.log(this.state.error_comment)
                }
            }
            this.setState({ [field]: value })
        }
    }

    
    render() {
        return (
            <div className='edit-form-container'>
                <div className='review-error'>
                    {this.state.show_errors && this.state.error_rating && <p className='error-p'>{this.state.error_rating}</p>}
                    {this.state.show_errors && this.state.error_comment && <p className='error-p'>{this.state.error_comment}</p> }
                </div>
                <div className='top'>
                    <h2>Overall Rating:</h2>
                    <Rating updateStars={this.handleRating} />
                </div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="written-review"><h2>Edit your review</h2></label>
                    <textarea
                        placeholder="Write your edited review"
                        id="written-review"
                        value={this.state.body}
                        onChange={this.handleChange('body')}
                    />
                    <input type="submit" className='submit-form-btn' value='Edit Review' />
                    <button className='submit-form-btn' onClick={() => this.props.resetState()} >Cancel</button>
                </form>
            </div>
        )
    }
}

export default withRouter(EditReviewForm)