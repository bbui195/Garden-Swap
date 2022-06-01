const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require('passport');

const Listing = require("../../models/Listing");
const validateListingInput = require('../../validation/listings');

/*
    show
    index
    create
    update
    delete
*/

router.get('/', (req, res) => {
    Listing.find()
        // .sort({ date: -1 })
        .then(listings => res.json(listings))
        .catch(err => res.status(404).json( { nolistingsfound: 'No listings found'}));
});

// router.get('/user/:user_id', (req, res) => {
//     Tweet.find({user: req.params.user_id})
//         .then(tweets => res.json(tweets))
//         .catch(err =>
//             res.status(400).json({ notweetsfound: 'No tweets found from that user'})
//         );
        
// });

router.get('/:id', (req, res) => {
    Listing.findById(req.params.id)
        .then(listing => res.json(listing))
        .catch(err =>
            res.status(404).json({ notweetfound: 'No listing found with that ID'})
        )
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateListingInput(req.body);

        if(!isValid) {
            return res.status(400).json(errors);
        }

        const newListing = new Listing({
            userId: req.user.id,
            title: req.body.title,
            body: req.body.body,
            photoUrls: req.body.photoUrls,
            price: mongoose.Types.Decimal128.fromString(req.body.price),
            location: req.body.location,
            category: req.body.category
        });

        newListing.save().then(listing => res.json(listing));
    }
)

router.delete('/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Listing.findById(req.params.id)
            .then(listing => {
                if(listing.userId !== req.user.id) {
                    res.status().json({ notowned: 'Current user does not own this listing' })
                } else {
                    Listing.deleteOne({_id: req.params.id})
                        .then(() => res.json({deleted: true}))
                }
            }).catch(err => res.status(404).json({ notweetfound: 'No listing found with that ID'}))
    }
)

router.patch('/:id',
passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Listing.findById(req.params.id)
            .then(listing => {
                if(listing.userId !== req.user.id) {
                    res.status().json({ notowned: 'Current user does not own this listing' })
                } else {
                    const { errors, isValid } = validateListingInput(req.body);

                    if(!isValid) {
                        return res.status(400).json(errors);
                    }
                    listing.title = req.body.title;
                    listing.body = req.body.body;
                    listing.photoUrls = req.body.photoUrls;
                    listing.price = mongoose.Types.Decimal128.fromString(req.body.price);
                    listing.location = req.body.location;
                    listing.category = req.body.category;
                    listing.save()
                        .then(list => res.json(listing))
                        .catch(err => res.status(400).json({ failedupdate: 'Failed to update listing'}))
                }
            }).catch(err => res.status(404).json({ notweetfound: 'No listing found with that ID'}))
    }
)

module.exports = router;