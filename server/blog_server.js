//imports
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const mainRouter = require('./routes/mainRouter');

//setup server
const app = express();
const port = process.env.PORT || 8000;

//set up dotenv
dotenv.config();

//middelwares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static('uploads'));


//database connection
mongoose.connect(process.env.DB_CONNECT,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=> {console.log('DB CONNECTED !')})
.catch((err) => {console.log({err: err})})

//setting up routes
app.use('/',mainRouter);


//start server
app.listen(port, () => {console.log(`SERVER RUNNING at http://localhost:${port}`)})