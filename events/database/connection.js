const mysql = require('mysql2');
const config = require('../../config');

const connection = mysql.createConnection(config);

connection.connect((err) => {
    if (err) {
        console.error('Erreur de connection à la base de données', err.stack);
        return;
    }

    console.log('Connecté à la base de données');
});

module.exports = connection;