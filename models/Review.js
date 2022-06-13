const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    reviewerId:{
        type: Schema.Types.ObjectId,
        ref: 'users',
        index: true
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User',
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

module.exports = Review = mongoose.model("Review", ReviewSchema);