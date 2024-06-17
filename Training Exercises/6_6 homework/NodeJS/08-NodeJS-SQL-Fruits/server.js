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


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'static')));
app.use(express.urlencoded({extended:true})); // if we've got form data, converts it to json
app.use(express.json());// converts json into object

app.use(fileUpload());



app.get('/',home.getHomePage);
app.get('/add',fruit.getAddPage);
app.post('/add',fruit.addFruit);


app.listen(port, () => { console.log(`Listening on the port ${port}`)})