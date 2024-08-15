let mongoose = require('mongoose');
let validator = require('validator');

let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate(value) {
            if (!validator.isAlpha(value)) {
                throw new Error('O nome deve conter apenas letras');
            }
        }
    },
    email: String,
    password: String
});

module.exports = mongoose.model('User', userSchema);