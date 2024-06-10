const express = require('express');
const app = express();
const mysql = require('mysql2');
const path = require('path');
require('ejs');
const getHomePage = require('./model/home.js');
const getAddPage = require('./model/fruit.js');


//define port
let port = process.env.PORT ? process.env.PORT : 3053;
//


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'static')));


app.get('/',getHomePage);
app.get('/add',getAddPage);
// app.get('/',color);
// app.get('/', (req,res) => {
//     res.send('<h1>🧁🥑The YUMMIEST APP of all🍐</h1>');
//  })

app.listen(port, () => { console.log(`Listening on the port ${port}`)})