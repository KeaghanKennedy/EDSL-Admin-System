var mongoose = require('mongoose');

var playerSchema = new mongoose.Schema({
    firstName: String,
    surname: String,
    dob: Date,
    gender: String,
    mobile: Number,
    email: String,
    adress: String,
    postcode: Number,
});

module.exports = mongoose.model("Player", playerSchema);