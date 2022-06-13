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

function formatMessage(message, username) {
    return {
        body: message.body,
        receiverId: message.receiverId._id ? message.receiverId._id : message.receiverId,
        senderId: message.senderId._id ? message.senderId._id : message.senderId,
        username: username || message.senderId.username || message.receiverId.username,
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


router.get('/', // all recent messages for current user
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        // console.log("fetching recent");
        Promise.all([
            Message.find({senderId: req.user.id}).populate('receiverId'),
            Message.find({receiverId: req.user.id}).populate('senderId')
        ]).then(([from, to]) => {
            resJson = {
                users: {}
            };
            function appendRecent(resMessages, messages, otherUser) {
                messages.forEach((message) => {
                    if(!resMessages[message[otherUser].id]
                        || new Date(resMessages[message[otherUser].id].createdAt) < new Date(message.createdAt)) {
                        resMessages[message[otherUser].id] = message;
                    }
                    resJson.users[message[otherUser].id] = {
                        username: message[otherUser].username,
                        id: message[otherUser].id
                    };
                });
            }
            let recent = {};
            appendRecent(recent, from, "receiverId");
            appendRecent(recent, to, "senderId");
            resJson.messages = formatMessages(Object.values(recent));
            Object.assign(resJson.users,
                {[req.user.id]: {
                    username: req.user.username,
                    id: req.user.id
                }
            })
            // console.log("res is ", resJson);
            res.json(resJson);
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
                        console.log(router.io);
                        [message.senderId, message.receiverId].forEach(id => {
                            console.log(id);
                            if(router.io.connectedUsers[id]) {
                                console.log("messaging", id);
                                router.io.to(router.io.connectedUsers[id]).emit(
                                    "message", formatMessage(message, req.user.username)
                                );
                            }
                        })
                        console.log("finished messaging");
                        res.end();
                    }).catch(err => res.status(401).json({failedmessage: 'Could not send message'}));
                    // .then(message => res.json(message));

            }).catch(err => res.status(404).json({ nouserfound: 'No user found with that ID'}))
    }
);

router.patch('/:messageId',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Message.findById(req.params.messageId)
            .then(message => {
                if(!message || !message.senderId) {
                    res.end();
                    return;
                }
                if(message.senderId.toString() !== req.user.id.toString()) {
                    res.status(400).json({ notowned: 'Current user did not send this message' });
                } else {
                    // console.log(message);
                    message.body = req.body.body;
                    // console.log(message);
                    message.save()
                        .then(message => {
                            [message.senderId, message.receiverId].forEach(id => {
                                if(router.io.connectedUsers[id]) {
                                    router.io.to(router.io.connectedUsers[id]).emit(
                                        "message", formatMessage(message, req.user.username)
                                    );
                                }
                            })
                            res.end();
                        }).catch(err => res.status(401).json({failedmessage: 'Could not edit message'}));
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
                if(!message || !message.senderId) {
                    res.end();
                    return;
                }
                if(message.senderId.toString() !== req.user.id.toString()) {
                    res.status(400).json({ notowned: 'Current user did not send this message' });
                } else {
                    Message.findByIdAndDelete(req.params.messageId)
                    .then(() => {
                        [message.senderId, message.receiverId].forEach(id => {
                            if(router.io.connectedUsers[id]) {
                                router.io.to(router.io.connectedUsers[id]).emit(
                                    "message", {
                                        body: "",
                                        id: message.id
                                    }
                                );
                            }
                        })
                        res.end();
                        }).catch(err => res.status(401).json({couldnotdelete: "message failed to delete"}));
                }
            })
    }
);

module.exports = router;