var burgers = require("../config/orm");
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function (req, res) {
    res.send('Welcome to the Page!');
});

app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});

module.exports = Stuff;