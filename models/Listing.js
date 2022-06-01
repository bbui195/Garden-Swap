const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'users',
        index: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    photoUrls: {
        type: [String],
        required: true
    },
    price: {
        type: mongoose.Decimal128,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = Listing = mongoose.model("Listing", ListingSchema);