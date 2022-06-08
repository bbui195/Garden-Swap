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

function formatMessage(message, username) {
    return {
        body: message.body,
        receiverId: message.receiverId,
        senderId: message.senderId,
        username: username,
        time: message.createdAt,
        id: message.id
    };
}

function formatMessages(messages, username) {
    let formatted = {};
    messages.forEach(message => {
        formatted[message.id] = formatMessage(message, username);
    });
    return formatted;
    // return messages.map(message => {
    //     return formatMessage(message, username);
    // });
}

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
                        messages: Object.assign(formatMessages(from, req.user.username),
                            formatMessages(to, receiver.username)),
                            // formatMessages(from, req.user.username)
                            // .concat(formatMessages(to, receiver.username)),
                        users: {
                            [receiver.id]: {
                                username: receiver.username,
                                id: receiver.id
                                // profilePicture
                            },
                            [req.user.id]: {
                                username: req.user.username,
                                id: req.user.id
                            }
                        }
                    })
                })
            }
        ).catch(err => res.status(404).json({ nouserfound: 'No user found with that ID'}))
    }
);

router.post('/', // messages to id
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        // console.log("messaging");
        // console.log(req.body)
        User.findById(req.body.userId)
            .then(receiver => {
                let newMessage = new Message({
                    senderId: req.user.id,
                    receiverId: req.body.userId,
                    body: req.body.body
                });

                newMessage.save()
                    .then(message => {
                        // console.log(router.io);
                        [message.senderId, message.receiverId].forEach(id => {
                            if(router.io.connectedUsers[id]) {
                                router.io.to(router.io.connectedUsers[id]).emit(
                                    "message", formatMessage(message, req.user.username)
                                );
                            }
                        })
                    });
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
                    res.status(400).json({ notowned: 'Current user did not send this message' });
                } else {
                    message.body = req.body.body;
                    message.save()
                        // .then(message => res.json(message));
                }
            }).catch(err => res.status(404).json({nomessagefound: 'No message found with that ID'}));
    }
);

router.delete('/:messageId',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Message.findById(req.params.messageId)
            .then(message => {
                if(message.senderId !== req.user.id) {
                    res.status(400).json({ notowned: 'Current user did not send this message' });
                } else {
                    Message.findByIdAndDelete(res.params.messageId)
                        // .then(() => null)
                }
            })
    }
);

module.exports = router;