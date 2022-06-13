import React from 'react'
import Rating from './stars'

class ReviewForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userId: this.props.review.userId,
            rating: this.props.review.rating,
            body: this.props.review.body,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleRating = this.handleRating.bind(this)
    };

    handleSubmit(e) {
        e.preventDefault()
        this.props.action(this.state).then(this.props.history.push(`/users/${this.state.userId}`))
    };

    handleRating(rating) {
        this.setState({ ...this.state, rating })
    };

    handleChange(field) {
        return e => {
            this.setState({ ...this.state, [field]: e.currentTarget.value })
        }
    };

    render() {
        return (
            <div className='review-form-container'>
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