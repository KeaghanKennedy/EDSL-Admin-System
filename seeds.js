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
                    fistName: faker.name.firstName(),
                    surname: faker.name.lastName(),
                    dob: faker.date.past(),
                    gender: gender[Math.floor(Math.random() * gender.length)],
                    mobile: faker.phone.phoneNumber(),
                    email: faker.internet.email(),
                    adress: faker.address.streetAddress(),
                    postcode: faker.address.zipCode()
                }, function (err, newPlayer) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(newPlayer);
                    }
                });
            }

        }
    })
}
module.exports = seedDB;