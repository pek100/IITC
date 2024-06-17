const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: 'fruits',
    user: 'root',
    password: 'NHFTK'
});

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('Connected to the database!');
});

global.db = db
module.exports = global.db;