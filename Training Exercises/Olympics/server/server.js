import express from "express";
import 'dotenv/config'
import { connectDB } from './db/db.js'

import './model/index.js';


const port = process.env.PORT || 3000
const app = express();
connectDB();


app.get("/", (_, res) => {
    res.send('<h1 style="font-family: fantasy; color: cornflowerblue;">I am Olympics API</h1>');
})


app.listen(port, () => {
    console.log(`listening on port ${port}`);
    })
