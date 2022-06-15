import React from 'react'
import Rating from './stars'

class ReviewForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userId: this.props.review.userId,
            rating: this.props.review.rating,
            body: this.props.review.body,
            error_rating: "Rating is required",
            error_comment: "Comment is required",
            show_errors: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleRating = this.handleRating.bind(this)
    };

    handleSubmit(e) {
        e.preventDefault()

        const has_errors = (
            this.state.error_rating ||
            this.state.error_comment 
        )

        if (has_errors) {
            this.setState({show_errors:true})
            return
        }

        this.props.action(this.state).then(this.props.history.push(`/users/${this.state.userId}`))
    };

    handleRating(rating) {
        if (rating <= 0) {
            this.setState({error_rating: "Star rating is required"})
        } else {
            // console.log(rating)
            // console.log(this.state.rating)
            this.setState({error_rating: false})
            this.setState({rating:rating })
            // console.log(this.state.error_rating)
        }
        return this.setState({rating: rating})
    };

    handleChange(field) {
        return e => {
            let value = e.currentTarget.value
            if (field === 'body') {
                if (value.length <= 0) {
                    this.setState({error_comment: "Comment cannot be blank"})
                } else {
                    this.setState({error_comment: false})
                    console.log(this.state.error_comment)
                }
            }
            this.setState({[field]: value })
        }
    };

    render() {
        return (
            <div className='review-form-container'>
                <div className='review-error'>
                    {this.state.show_errors && this.state.error_rating && <p>{this.state.error_rating}</p>}
                    {this.state.show_errors && this.state.error_comment && <p>{this.state.error_comment}</p>}
                </div>
                <h1 className='form-title'>{this.props.formType} for User</h1>
                <div className='overall-rating'>
                    <h2>Add a written review</h2>
                    <Rating updateStars={this.handleRating} className='stars-component' />
                </div>

                <form className='review-form' onSubmit={this.handleSubmit}>
                    <label htmlFor="written-review"></label>
                    <textarea
                        placeholder="Please write a comment"
                        id="written-review"
                        value={this.state.body}
                        onChange={this.handleChange('body')}
                    />
                    <input type="submit" className='submit-form-btn' value='Submit' />
                </form>
            </div>
        )
    }
};

export default ReviewForm;