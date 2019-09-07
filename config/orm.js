var connection = require('./connection');

var orm = {
    selectAll: (callback) => {
        var queryString = 'SELECT * FROM burgers';
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    insertOne: function (burgerName) {
        var queryString = 'INSERT INTO burgers (burger_name) VALUES ("' + burgerName + '");';
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            // console.log(result);
        });
    },
    updateOne: function (newBurgerName, id) {
        var queryString = 'UPDATE burgers SET burger_name = "' + newBurgerName + '" WHERE id = ' + id;
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            // console.log(result);
        });
    },
}

module.exports = orm;