const express = require("express");
const router = express.Router();
const Listing = require('../../models/Listing')
const mongoose = require("mongoose");
const passport = require('passport');
require('dotenv').config()


const validateListingInput = require('../../validation/listings');

const multer = require('multer');
const Aws = require('aws-sdk');

const storage = multer.memoryStorage({
    destination: function (req, file, cb) {
        cb(null, '')
    }
})

const filefilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || 
        file.mimetype === 'image/jpg' || 
        file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

const upload = multer({ storage: storage, fileFilter: filefilter });
const bucketRegion = process.env.AWS_BUCKET_REGION
const bucketName = process.env.AWS_BUCKET_NAME
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretKey = process.env.AWS_SECRET_KEY
/*
    show
    index
    create
    update
    delete
*/

function formatListing(listing) {
    return {
        userId: listing.userId._id || listing.userId,
        username: listing.userId.username,
        id: listing.id,
        body: listing.body,
        category: listing.category,
        location: listing.location,
        photoUrls: listing.photoUrls,
        title: listing.title,
        postedAt: listing.createdAt,
        price: listing.price.toString()
    }
}

function formatListings(listings) {
    let returnData = {};
    listings.forEach((listing) => {
        returnData[listing.id] = formatListing(listing);
    });
    return returnData;
}

router.get('/', (req, res) => {
    Listing.find()
        // .sort({ date: -1 })
        .then(listings => {
            res.json(formatListings(listings));
        })
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
    Listing.findById(req.params.id).populate("userId")
        .then(listing => res.json(formatListing(listing)))
        .catch(err =>
            res.status(404).json({ nolistingfound: 'No listing found with that ID'})
        )
});

router.get('/category/:category', (req, res) => {
    Listing.find({ category: req.params.category })
        .then(listings => {
            res.json(formatListings(listings));
        })
        .catch(err =>
            res.status(404).json({ nolistingfound: 'No listing found with that ID'})
        )
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    upload.single('listing[image]'),
    (req, res) => {
        // console.log("Validating input");
        let listing = req.body.listing;
        listing.userId = req.user.id.toString();
        // console.log(req);
        // console.log(req.body);
        const { errors, isValid } = validateListingInput(listing);

        if(!isValid) {
            return res.status(400).json(errors);
        }
        let newListing;
        // console.log(listing.photoUrls);
        // if(req.body.photoUrls.)
        // console.log(listing);
        newListing = new Listing({
            userId: req.user.id,
            title: listing.title,
            body: listing.body,
            // photoUrls: listing.photoUrls,
            price: listing.price,
            location: listing.location,
            category: listing.category
        });
        // console.log(listing.photoUrls);
        let params = {
            Bucket: bucketName,      // bucket that we made earlier
            Key:req.file.originalname,               // Name of the image
            Body:req.file.buffer,                    // Body which will contain the image in buffer format
            // ACL:"public-read-write",                 // defining the permissions to get the public link
            ContentType:"image/jpeg"                 // Necessary to define the image content-type to view the photo in the browser with the link
        };
        if(listing.photoUrls.startsWith("data:image")) {
            if(listing.photoUrls.startsWith("data:image/png")) {
                params.ContentType = "image/png"
            }
            s3.upload(params,(error, data)=>{
                if(error){
                    res.status(500).send({"err":error})  // if we get any error while uploading error message will be returned.
                    return
                }

                // console.log('make it past if statement')
                newListing.photoUrls = data.Location;
                // console.log(listing);
                newListing.save()
                    .then(listing => {
                        // console.log("saved the listing")
                        res.json(formatListing(listing))
                    })
                    .catch(err => res.status(400).json({ failedcreate: "Failed to create listing"}))
                }
            )
        } else {
            newListing.photoUrls = listing.photoUrls;
            newListing.save()
                .then(listing => {
                    // console.log("saved the listing")
                    res.json(formatListing(listing))
                })
                .catch(err => res.status(400).json({ failedcreate: "Failed to create listing"}))
        }
        

        // newListing.save().then(listing => res.json(listing));
    }
)

router.delete('/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Listing.findById(req.params.id)
            .then(listing => {
                if(listing.userId.toString() !== req.user.id.toString()) {
                    // console.log('am I here in the if?')
                    res.status().json({ notowned: 'Current user does not own this listing' })
                } else {
                    // console.log('am I here in the else?')
                    Listing.deleteOne({_id: req.params.id})
                        .then(() => res.json({deleted: true}))
                }
            }).catch(err => res.status(404).json({ nolistingfound: 'No listing found with that ID'}))
    }
)

router.patch('/:id',
passport.authenticate('jwt', { session: false }),
    upload.single('listing[image]'),
    (req, res) => {
    // console.log(req.params, "this is the request");
        Listing.findById(req.params.id)
            .then(listing => {
                if(listing.userId.toString() !== req.user._id.toString()) {
                    res.status().json({ notowned: 'Current user does not own this listing' })
                } else {
                    // console.log(listing);
                    const { errors, isValid } = validateListingInput(req.body.listing);
                    // console.log(listing);
                    // console.log('did we pass the validation?')
                    if(!isValid) {
                        return res.status(400).json(errors);
                    }

                    listing.title = req.body.listing.title;
                    listing.body = req.body.listing.body;
                    listing.price = req.body.listing.price;
                    listing.location = req.body.listing.location;
                    listing.category = req.body.listing.category;
                    listing.photoUrls = req.body.listing.photoUrls;
                    
                    if(req.body.listing.photoUrls.includes(".amazonaws.com/")) {
                        listing.save()
                            .then(listing => {
                                // console.log("saved the listing")
                                res.json(formatListing(listing))
                            })
                            .catch(err => res.status(400).json({ failedupdate: 'Failed to update listing'}))
                    } else {
                        let params = {
                            Bucket: bucketName,      // bucket that we made earlier
                            Key:req.file.originalname,               // Name of the image
                            Body:req.file.buffer,                    // Body which will contain the image in buffer format
                            // ACL:"public-read-write",                 // defining the permissions to get the public link
                            ContentType:"image/jpeg"                 // Necessary to define the image content-type to view the photo in the browser with the link
                        };
                        if(listing.photoUrls.startsWith("data:image/png")) {
                            params.ContentType = "image/png"
                        }
    
                        s3.upload(params,(error, data)=>{
                            if(error){
                                res.status(500).send({"err":error})  // if we get any error while uploading error message will be returned.
                                return
                            }
    
                            // console.log('make it past if statement')
                            listing.photoUrls = data.Location;
                            // console.log(listing);
                            listing.save()
                                .then(listing => {
                                    // console.log("saved the listing")
                                    res.json(formatListing(listing))
                                })
                                .catch(err => res.status(400).json({ failedupdate: 'Failed to update listing'}))
                            }
                        )
                    }

                }
            }).catch(err => res.status(404).json({ nolistingfound: 'No listing found with that ID'}))
    }
)


//AWS start 






const s3 = new Aws.S3({
    accessKeyId: accessKeyId,              // accessKeyId that is stored in .env file
    secretAccessKey: secretKey     // secretAccessKey is also store in .env file
})


router.post(`/image`, upload.single('listing[image]'), (req, res) => { 
    // console.log(req.body, 'should log the req.body')// given data object, creates new entry

    const { errors, isValid } = validateCreateListingInput(req.body.listing);
    // console.log(req.body.listing);
    // console.log(req.file)

    if (!isValid) {
        return res.status(400).json(errors);
    }


    const params = {
        Bucket: bucketName,      // bucket that we made earlier
        Key:req.file.originalname,               // Name of the image
        Body:req.file.buffer,                    // Body which will contain the image in buffer format
        // ACL:"public-read-write",                 // defining the permissions to get the public link
        ContentType:"image/jpeg"                 // Necessary to define the image content-type to view the photo in the browser with the link
    };

    s3.upload(params,(error, data)=>{
        if(error){
            res.status(500).send({"err":error})  // if we get any error while uploading error message will be returned.
            return
        }
        const newListing = new Listing({
            photoUrls: data.Location, //what is this??
            title: req.body.listing.title,
            body: req.body.listing.body,
            price: req.body.listing.price,
            userId: req.body.listing.userId,
            location: req.body.listing.location,
            category: req.body.listing.category,
            type: 'listing'
        });
        newListing.save()
        .then(listing => res.json(listing))
    });
})

module.exports = router;