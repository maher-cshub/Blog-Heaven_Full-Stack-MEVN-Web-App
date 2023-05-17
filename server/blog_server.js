//imports
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const mainRouter = require('./routes/mainRouter');
const path = require("path")

//setup server
const app = express();
const port = process.env.PORT || 8000;

//set up dotenv
dotenv.config();

//middelwares
response.setHeader("Access-Control-Allow-Origin", "*");
response.setHeader("Access-Control-Allow-Credentials", "true");
response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

app.use(express.json());
app.use(express.urlencoded({ extended:true }));


//database connection
mongoose.connect(process.env.DB_CONNECT,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=> {console.log('DB CONNECTED !')})
.catch((err) => {console.log({err: err})})


//for static
app.use("/uploads",express.static('uploads'));

//setting up routes
app.use('/',mainRouter);

//start server
app.listen(port, () => {console.log(`SERVER RUNNING at http://localhost:${port}`)})