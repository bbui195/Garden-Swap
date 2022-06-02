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

router.get('/:userId', (req, res) => {
    User.findById(req.params.userId)
        .then(user => {
            Review.find({ userId: user.id})
                .then(reviews => {
                    res.json({
                        reviews
                    });
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

        const newReview = new Review({
            reviewerId: req.user.id,
            userId: mongoose.Types.ObjectId.fromString(req.body.userId),
            body: req.body.body,
            rating: req.body.rating
        });

        newReview.save().then(review => res.json(review));
    }
)

router.patch('/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Review.findById(req.params.id)
            .then(review => {
                if(review.reviewerId !== req.user.id) {
                    res.status().json({ notowned: 'Current user does not own this reviewer' })
                } else {
                    const { errors, isValid } = validateReviewInput(req.body);

                    if(!isValid) {
                        return res.status(400).json(errors);
                    }
                    review.body = req.body.body;
                    review.rating = req.body.rating;
                    review.save()
                        .then(review => res.json(review))
                        .catch(err => res.status(400).json({ failedupdate: 'Failed to update review'}))
                }
            }).catch(err => res.status(404).json({ notweetfound: 'No review found with that ID'}))
    }
)

router.delete('/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Review.findById(req.params.id)
            .then(review => {
                if(review.reviewerId !== req.user.id) {
                    res.status().json({ notowned: 'Current user does not own this review' })
                } else {
                    Review.deleteOne({id: req.params.id})
                        .then(() => res.json({deleted: true}))
                }
            }).catch(err => res.status(404).json({ noreviewfound: 'No review found with that ID'}))
    }
)

module.exports = router;