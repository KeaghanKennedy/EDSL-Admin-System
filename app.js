var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    Player = require('./models/player'),
    seedDB = require('./seeds');

mongoose.connect("mongodb://localhost/edsl_admin_system", { useNewUrlParser: true });

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
seedDB();

app.get("/", function (req, res) {
    res.render("landing");
});

//SEASON ROUTES

app.get("/seasons", function (req, res) {
    res.render("seasons/index");
});

app.get("/seasons/new", function (req, res) {
    res.render("seasons/new");
});

//PLAYER ROUTES

app.get("/players", function (req, res) {
    Player.find({}, function (err, allPlayers) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("players/index", { players: allPlayers });
        }
    });
});


app.post("/players", function (req, res) {
    Player.create(req.body.player, function (err, newPlayer) {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect("players");
        }
    });
});

app.get("/players/new", function (req, res) {
    res.render("players/new");
});

app.listen(8000, function () {
    console.log("Server has started");
});