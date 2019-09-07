var mysql = require('mysql');

var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: process.env.PASSWORD,
        database: "burger_db"
    });
}

connection.connect(function (err) {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;