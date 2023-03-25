'use strict'
// requirements 
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config();
const axios = require('axios')



const app = express()
app.use(cors());
const PORT = process.env.PORT;
// parse JSON payloads
app.use(express.json());
//or
//app.use(bodyParser.urlencoded({extend:false}));
//app.use(bodyParser.json());


// connect database
mongoose.connect('mongodb://localhost:27017/ToDoApp',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

// schema and model
//schema



const routes = require('./routes/ToDoRoute');
app.use(routes)


app.listen(PORT,()=>{
    console.log(`listening on PORT number ${PORT}`)
});