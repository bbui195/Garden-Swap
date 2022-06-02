const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const Listing = require("../../models/Listing");
const keys = require("../../config/keys");
const passport = require("passport");
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router.get("/:id",
    (req, res) => {
        User.findById(req.params.id)
            .then(user => {
                Listing.find({userId: user.id})
                    .then(listings => {
                        res.json({
                            id: user.id,
                            username: user.username,
                            joined: user.createdAt,
                            zipcode: Math.floor(Math.random() * 10000).toString(),
                            rating: Math.ceil(Math.random() * 5).toString(),
                            listings: listings.map(listing => {
                                return {
                                    id: listing.id,
                                    body: listing.body,
                                    category: listing.category,
                                    location: listing.location,
                                    photoUrls: listing.photoUrls,
                                    title: listing.title,
                                    postedAt: listing.createdAt
                                }
                            })
                        });
                    })
            }).catch(err => res.status(404).json({ nouserfound: "User with that id was not found"}))
    }
)

router.get("/current", passport.authenticate("jwt", {session: false}), (req, res) => {
    res.json({
        id: req.user.id,
        username: req.user.username
    });
});

router.post("/register", (req, res) => {
    console.log("aaaaaaa", req.body);
    const { errors, isValid } = validateRegisterInput(req.body);
    console.log(errors, isValid);
    if(!isValid) {
        return res.status(400).json(errors);
    }
    User.findOne({username: req.body.username})
        .then(user => {
            if(user) {
                errors.username = "username already exists";
                return res.status(400).json(errors);
            } else {
                const newUser = new User({
                    username: req.body.username,
                    password: req.body.password
                })
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => {
                                // res.json(user)
                                const payload = {id: user.id, username: user.username};
                                jwt.sign(payload, keys.secretOrKey, {expiresIn: 3600},
                                    (err, token) => {
                                        res.json({
                                            success: true,
                                            token: "Bearer " + token,
                                            // user: {
                                            //     username: newUser.username,
                                            //     id: newUser.id
                                            // }
                                        });
                                    });
                            })
                            .catch(err => console.log(err));
                    })
                })

            }
        })
});

router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }
    const username = req.body.username;
    const password = req.body.password;
    User.findOne({username})
        .then(user => {
            if(!user) {
                errors.email = 'User not found';
                return res.status(404).json(errors);
            }

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(isMatch) {
                        const payload = {id: user.id, username: user.username};

                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            {expiresIn: 3600},
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer " + token,
                                    // user: {
                                    //     username: user.username,
                                    //     id: user.id
                                    // }
                                });
                            }
                        );
                    } else {
                        // return res.status(400).json({password: "Incorrect password"})
                        errors.password = 'Incorrect password';
                        return res.status(400).json(errors);
                    }
                })
        })
});

module.exports = router;