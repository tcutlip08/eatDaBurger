var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var con = require("./config/connection");

app.get('/', function (req, res) {
    res.send('Welcome to the Page!');
});
// Error handler !! MAKE SURE ITS LAST !!
app.get('*', function (req, res) {
    res.send('<h1>Sorry we could not find what you are looking for!<h1>');
});
app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});