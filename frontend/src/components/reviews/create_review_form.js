import React from 'react'
import Rating from './stars'

class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user_id: this.props.review.user_id,
            rating: this.props.review.rating,
            comment: this.props.review.comment,
            id: this.props.review.id
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleRating = this.handleRating.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.action(this.state).then(this.props.history.push(`/users/${this.state.user_id}`))
    }

    handleRating(rating) {
        this.setState({...this.state,rating})
    }

    handleChange(field) {
        return e => {
            this.setState({...this.state,[field]: e.currentTarget.value})
        }
    }

    render() {
        return (
            <>
                <h1>{this.props.formType}</h1>
                <h2>Overall Rating</h2>
                <Rating updateStars={this.handleRating} />
                <form className='review-form' onSubmit={this.handleSubmit}>
                    <label htmlFor="written-review"><h2>Add a written review</h2></label>
                    <textarea 
                        placeholder="Please write a comment" 
                        id="written-review"
                        value={this.state.comment} 
                        onChange={this.handleChange('comment')}
                        />
                    <input type="submit" className='submit-form' value='Submit'/>
                </form>
            </>
        )
    }
}

export default ReviewForm