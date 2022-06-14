const express = require("express");
const router = express.Router();
const Review = require('../../models/Review');
const User = require('../../models/User');
const mongoose = require("mongoose");
const passport = require('passport');
require('dotenv').config()

const validateReviewInput = require('../../validation/reviews');
// const validateCreateListingInput = require('../../validation/listings');

/*
    show
    create
    update
    delete
    */
function formatReview(review) {
    return {
        body: review.body,
        postedAt: review.createdAt,
        rating: review.rating,
        reviewerId: review.reviewerId._id || review.reviewerId,
        userId: review.userId,
        username: review.reviewerId.username,
        id: review.id
    }
}

function formatReviews(reviews) {
    let returnData = {};
    reviews.forEach((review) => {
        returnData[review.id] = formatReview(review);
    });
    return returnData;
}
   
router.get('/:userId', (req, res) => {
    User.findById(req.params.userId)
    .then(user => {
        Review.find({ userId: user.id}).populate("reviewerId")
        .then(reviews => {
            res.json(formatReviews(reviews));
        });
    }).catch(err => res.status(404).json({ nouserfound: 'No user found with that ID'}))
});

router.post('/',
passport.authenticate('jwt', { session: false }),
(req, res) => {
        const { errors, isValid } = validateReviewInput(req.body);

        if(!isValid) {
            return res.status(400).json(errors);
        }
        console.log('mongoose',mongoose.Types.ObjectId)
        const newReview = new Review({
            reviewerId: req.user.id,
            userId: req.body.userId,
            body: req.body.body,
            rating: req.body.rating
        });
        newReview.save().then(review => res.json(review));
    }
)

router.patch('/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {  
        console.log(mongoose.Types.ObjectId(req.params.id), "this is the params")
        console.log(req.user, 'this is the user')
        // Review.findById(mongoose.Types.ObjectId(req.params.id))
        Review.findById(req.params.id)
            .then(review => {
                console.log(review, "this is the review yes it is") //original review
                console.log(req.body, "this is the req.body") //edited review
                if (review.reviewerId.toString() !== req.user.id.toString()) {
                    res.status().json({ notowned: 'Current user does not own this review' })
                } else {
                    console.log('why am I not in the else?')
                    
                    const { errors, isValid } = validateReviewInput(req.body);

                    if (!isValid) {
                        return res.status(400).json(errors);
                    }
                    review.body = req.body.body;
                    review.rating = req.body.rating;
                    review.save()
                        .then(review => res.json(review))
                        .catch(err => res.status(400).json({ failedupdate: 'Failed to update review'}))
                }
            }).catch(err => res.status(404).json({ noreviewfound: 'No review found with that ID'}))
    }
)

router.delete('/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        console.log(req.user, 'this is the req.user')
        console.log(req.params, 'this is the req.params')
        Review.findById(req.params.id)
            .then(review => {
                console.log(review, 'this is the review from DB');
                if(review.reviewerId.toString() !== req.user.id.toString()) {
                    console.log('I am in the if')
                    res.status().json({ notowned: 'Current user does not own this review' })
                } else {
                    console.log('did I make it to the else?')
                    Review.deleteOne({_id: req.params.id})
                        .then(() => res.json({deleted: true}))
                }
            }).catch(err => res.status(404).json({ noreviewfound: 'No review found with that ID'}))
    }
)

module.exports = router;