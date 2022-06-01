const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    senderId:{
        type: Schema.Types.ObjectId,
        ref: 'users'  
    },
    receiverId:{
        type: Schema.Types.ObjectId,
        ref: 'users'  
    },
    body: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = Listing = mongoose.model("Message", MessageSchema);