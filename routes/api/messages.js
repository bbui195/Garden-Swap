const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require('passport');

const User = require("../../models/User");
const Message = require("../../models/Message");
const validateMessageInput = require('../../validation/messages');

/*
    create
    show
    update
    delete
*/

router.get('/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        User.findById(req.params.id)
            .then(receiver => {
                Promise.all([
                    Message.find({senderId: req.user.id, receiverId: receiver.id}),
                    Message.find({senderId: receiver.id, receiverId: req.user.id})
                ]).then(([from, to]) => {
                    res.json({
                        from,
                        to
                    })
                })
            }).catch(err => res.status(404).json({ notweetfound: 'No listing found with that ID'}))
    }
);

module.exports = router;