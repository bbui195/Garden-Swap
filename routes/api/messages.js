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

router.get('/', // all messages for current user
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Promise.all([
            Message.find({senderId: req.user.id}),
            Message.find({receiverId: req.user.id})
        ]).then(([from, to]) => {
            res.json({
                from,
                to
            })
        })
    }
);

router.get('/:userId', // messages with user with id :id
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        User.findById(req.params.userId)
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
            }).catch(err => res.status(404).json({ nouserfound: 'No user found with that ID'}))
    }
);

router.post('/:userId', // messages to id
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        User.findById(req.params.userId)
            .then(receiver => {
                let newMessage = new Message({
                    senderId: req.user.id,
                    receiverId: req.params.userId,
                    body: req.body.body
                });

                newMessage.save()
                    // .then(message => res.json(message));

            }).catch(err => res.status(404).json({ nouserfound: 'No user found with that ID'}))
    }
);

router.patch('/:messageId',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Message.findById(req.params.messageId)
            .then(message => {
                if(message.senderId !== req.user.id) {
                    res.status().json({ notowned: 'Current user did not send this message' })
                } else {

                }
            }).catch(err => res.status(404).json({nomessagefound: 'No message found with that ID'}));
    }
);

module.exports = router;