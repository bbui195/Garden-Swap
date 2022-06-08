
const { default: mongoose, Mongoose } = require("mongoose");
const Validator = require("validator");
const validText = require("./valid-text");
const validCategory = require("./valid_category");

module.exports = function validateListingInput(data) {
    let errors = {};
    // console.log(data, 'this is the data')
    data.title = validText(data.title) ? data.title : '';
    data.body = validText(data.body) ? data.body : '';
    // data.price = mongoose.Types.Decimal128.fromString(data.price);
    data.location = validText(data.location) ? data.location : '';
    data.category = validText(data.category) ? data.category : '';
    data.photoUrls = data.photoUrls || '';
    // if(!mongoose.Types.ObjectId.isValid(data.userId)) {
    //     errors.userId = 'Invalid id';
    // }
    if(Validator.isEmpty(data.userId)) {
        errors.userId = 'Invalid id';
    }

    if(Validator.isEmpty(data.title)) {
        errors.title = 'Title field is required';
    }

    if(Validator.isEmpty(data.body)) {
        errors.body = 'Body field is required';
    }

    if(Validator.isEmpty(data.photoUrls)){
        errors.photoUrls = 'Must upload a photo of your product';
    }

    // if(!Array.isArray(data.photoUrls)) {
    //     errors.photoUrl = 'Photo Urls must be an array';
    // } else if(data.photoUrls.length == 0) {
    //     errors.photourl = 'Photo Urls cannot be empty';
    // }

    if(Validator.isEmpty(data.category)) {
        errors.category = 'Category field is required';
    } else if(!validCategory(data.category)) {
        data.category = '';
        errors.category = 'Invalid category';
    }
    console.log(errors, 'this is the errors')
    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}