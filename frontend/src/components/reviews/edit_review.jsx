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
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRating = this.handleRating.bind(this);
        this.handleRating = this.handleRating.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault()
        // console.log(this.props)
        this.props.action(Object.assign({}, this.state))
            .then(() => this.props.resetState())
    }

    handleRating(rating) {
        return this.setState({ ...this.state, rating: rating })
    }

    handleChange(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }



    render() {
        // console.log('edit page',this.props)
        return (
            <div className='edit-form-container'>
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
                </form>
            </div>
        )
    }
}

export default withRouter(EditReviewForm)