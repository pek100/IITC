const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: process.env.DB_NAME,
    user: process.env.DB_USER, 
    password: process.env.DB_PASS
});

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('Connected to the database!');
});

global.db = db
module.exports = global.db;