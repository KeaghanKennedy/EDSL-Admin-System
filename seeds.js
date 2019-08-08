var faker = require('faker');
var mongoose = require('mongoose');
var Player = require('./models/player');

var gender = ['male', 'female', 'other'];

function seedDB() {
    Player.remove({}, function (err) {
        if (err) {
            console.log(err);
        }
        else {
            for (i = 0; i < 50; i++) {
                Player.create({
                    firstName: faker.name.firstName(),
                    surname: faker.name.lastName(),
                    dob: faker.date.past(),
                    gender: gender[Math.floor(Math.random() * gender.length)],
                    mobile: 123456789,
                    email: faker.internet.email(),
                    adress: faker.address.streetAddress(),
                    postcode: 1234
                }, function(){});
            }
        }
    })
}
module.exports = seedDB;