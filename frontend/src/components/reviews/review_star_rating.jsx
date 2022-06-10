import React, { useState } from "react";
import { FaStar } from 'react-icons/fa'

class ReviewStarRating extends React.Component {
    constructor(props) {
        super(props)
    };


    render() {
        return (
            <div className="review-star-rating">
                {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;

                    return (
                        <label>
                            <input
                                type="radio"
                                name="rating"
                                value={ratingValue}
                            />
                            <FaStar
                                className="star"
                                size={25}
                                color={ratingValue <= this.props.rating ? "#000000" : "#fff"}
                            />
                        </label>
                    )
                })}
            </div>
        );
    }
}

export default ReviewStarRating;