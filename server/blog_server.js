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
// 👇️ specify origins to allow
const whitelist = ['*',"https://64651d5a6a0fae009f51277e--glistening-bombolone-6b841d.netlify.app"];

// ✅ Enable pre-flight requests
app.options('*', cors());

const corsOptions = {
  credentials: true,
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));

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