import React from 'react'
import Rating from './stars'




class EditReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: this.props.review.userId,
            rating: this.props.review.rating,
            body: this.props.review.body,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleRating = this.handleRating.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.action(this.state)
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
        console.log('edit page',this.props)
        return (
            <>
                <div>
                    <div>
                        <h1>{this.props.formType}</h1>
                        <h2>Overall Rating</h2>
                        <Rating updateStars={this.handleRating} />
                        <form onSubmit={this.handleSubmit}>
                            <label htmlFor="written-review"><h2>Add a written review</h2></label>
                            <textarea 
                                placeholder="Write your edited review" 
                                id="written-review"
                                value={this.state.body} 
                                onChange={this.handleChange('body')}
                                />
                            <input type="submit" className='submit-form' value='Submit'/>
                        </form>
                    </div>
                </div>
             </>
        )
    }
}

export default EditReviewForm