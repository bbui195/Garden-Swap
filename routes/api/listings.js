const express = require("express");
const router = express.Router();
const Listing = require('../../models/Listing')
const mongoose = require("mongoose");
const passport = require('passport');
require('dotenv').config()

const validateCreateListingInput = require('../../validation/listings');

const multer = require('multer');
const Aws = require('aws-sdk');

/*
    show
    index
    create
    update
    delete
*/

function formatListing(listing) {
    return {
        userId: listing.userId,
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
    Listing.findById(req.params.id)
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
    (req, res) => {
        const { errors, isValid } = validateListingInput(req.body);

        if(!isValid) {
            return res.status(400).json(errors);
        }

        const newListing = new Listing({
            userId: mongoose.Types.ObjectId.fromString(req.user.id),
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
            }).catch(err => res.status(404).json({ nolistingfound: 'No listing found with that ID'}))
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
            }).catch(err => res.status(404).json({ nolistingfound: 'No listing found with that ID'}))
    }
)


//AWS start 

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

const bucketRegion = process.env.AWS_BUCKET_REGION
const bucketName = process.env.AWS_BUCKET_NAME
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretKey = process.env.AWS_SECRET_KEY

const upload = multer({ storage: storage, fileFilter: filefilter });

const s3 = new Aws.S3({
    accessKeyId: accessKeyId,              // accessKeyId that is stored in .env file
    secretAccessKey: secretKey     // secretAccessKey is also store in .env file
})


router.post(`/image`, upload.single('listing[image]'), (req, res) => { 
    console.log(req.body, 'should log the req.body')// given data object, creates new entry
    const { errors, isValid } = validateCreateListingInput(req.body.listing);
    console.log(req.body.listing);
    console.log(req.file)
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
            price: req.body.listing.price, // latitude/longitude embedded
            // may need to add locationId here
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