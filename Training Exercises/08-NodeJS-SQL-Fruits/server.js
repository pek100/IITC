require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
require('ejs');
const fileUpload = require('express-fileupload');
const home  = require('./model/home');
const fruit = require('./model/fruit');



//define port
let port = process.env.PORT || 3053;
//
let nodeEnv = process.env.NODE_ENV.toLowerCase();
global.hostingDir =  nodeEnv==='development' ? '' : '/michaelpek/node-sql-fruits';



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'static')));
app.use(express.urlencoded({extended:true})); // if we've got form data, converts it to json
app.use(express.json());// converts json into object

app.use(fileUpload());




app.get(`${hostingDir}/`,home.getHomePage);

app.get(`${hostingDir}/add`,fruit.getAddPage);
app.post(`${hostingDir}/add`,fruit.addFruit);

app.get(`${hostingDir}/edit/:id`,fruit.getEditPage);
app.post(`${hostingDir}/edit/:id`,fruit.editFruit);
app.get(`${hostingDir}/delete/:id`,fruit.deleteFruit);

app.listen(port, () => { console.log(`Listening on the port ${port}`)})