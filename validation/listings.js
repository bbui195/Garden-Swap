
const { default: mongoose } = require("mongoose");
const Validator = require("validator");
const validText = require("./valid-text");
const validCategory = require("./valid_category");

module.exports = function validateCreateListingInput(data) {
    let errors = {};

    data.title = validText(data.title) ? data.title : '';
    data.body = validText(data.body) ? data.body: '';
    data.price = mongoose.Types.Decimal128.fromString(data.price);
    data.location = validText(data.location) ? data.location : '';
    data.category = validText(data.category) ? data.category : '';

    if(Validator.isEmpty(data.title)) {
        errors.title = 'Title field is required';
    }

    if(Validator.isEmpty(data.body)) {
        errors.body = 'Body field is required';
    }

    if(!Array.isArray(data.photoUrls)) {
        errors.photoUrl = 'Photo Urls must be an array';
    } else if(data.photoUrls.length == 0) {
        errors.photourl = 'Photo Urls cannot be empty';
    }

    if(Validator.isEmpty(data.category)) {
        errors.category = 'Category field is required';
    } else if(!validCategory(data.category)) {
        data.category = '';
        errors.category = 'Invalid category';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}