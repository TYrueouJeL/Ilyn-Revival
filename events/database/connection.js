const mysql = require('mysql2');
const config = require('../../config');

const connection = mysql.createConnection(config);

connection.connect((err) => {
    if (err) {
        console.error('Error while connecting to database', err.stack);
        process.exit(1);
    }

    console.log('Connected to the database');
});

module.exports = connection;