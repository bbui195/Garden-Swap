const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    senderId:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        index: true
    },
    receiverId:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        index: true
    },
    body: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = Message = mongoose.model("Message", MessageSchema);