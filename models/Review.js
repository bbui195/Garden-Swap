const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'users',
        index: true
    },
    body: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

module.exports = Listing = mongoose.model("Message", ReviewSchema);