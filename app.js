var express = require('express'),
    app = express();


app.get("/", function (req, res) {
    res.redirect("/season");
});

app.get("/season", function (req, res) {
    res.sendFile(__dirname + "/public/" + "season.html");
});

app.get("/results", function (req, res) {
    res.sendFile(__dirname + "/public/" + "results.html");
});

app.listen(8000, function () {
    console.log("Server has started");
});