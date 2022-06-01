const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    senderId:{
        type: Schema.Types.ObjectId,
        ref: 'users',
        index: true
    },
    receiverId:{
        type: Schema.Types.ObjectId,
        ref: 'users',
        index: true
    },
    body: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = Listing = mongoose.model("Message", MessageSchema);