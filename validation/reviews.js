

const { default: mongoose } = require("mongoose");
const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateReviewInput(data) {
    let errors = {};

    data.body = validText(data.body) ? data.body: '';
    data.rating = parseInt(data.rating);

    // if(!mongoose.Types.ObjectId.isValid(data.userId)) {
    //     errors.userId = 'Invalid id';
    // }

    if(Validator.isEmpty(data.body)) {
        errors.body = 'Body field is required';
    }

    if(data.rating < 1 || data.rating > 5) {
        errors.rating = 'Invalid rating';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}