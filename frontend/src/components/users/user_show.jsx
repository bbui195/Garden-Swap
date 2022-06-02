import React from 'react'
import { Link } from 'react-router-dom'

class UserShow extends React.Component {
    constructor(props) {
        super(props)

        // this.handleRemove = this.handleRemove.bind(this)
    }

    componentDidMount() {
        this.props.requestProduct(this.props.match.params.productId)
    }

    // handleRemove(review) {
    //     this.props.deleteReview(review.id)
    // }

    render() {
        console.log(this.props)
        // const { username, joined, rating } = this.props
        return(
            <ul>
                {/* <h1>{this.props.user}</h1> */}
                {/* <li>{username}</li>
                <li>{joined}</li>
                <li>{rating}</li> */}
                {/* <Link to={`/reviews/${review.id}/edit`}>Edit Button</Link> */}
                <Link to={`/reviews/new`}>Create Review</Link>
            </ul>
        )
    }
}

export default UserShow