const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const hotelRoute = require('./routes/hotels');
const roomRoute = require('./routes/rooms');
const userRoute = require('./routes/users');
const cookieParser = require('cookie-parser');

const app = express();
dotenv.config();


const connect = async () => { 
    try {
        await mongoose.connect( process.env.MONGODB_URL , {
            useNewUrlParser : true,
            useUnifiedTopology : true
        });
         console.log('Connect to MongoDB');
      } catch (error) {
         throw  error.message;
      }
};

app.use(express.json());    
app.use(cookieParser());
app.use('/api/v1/auth' , authRoute)
app.use('/api/v1/hotels' , hotelRoute)
app.use('/api/v1/rooms' , roomRoute)
app.use('/api/v1/users' , userRoute)

app.listen(8000 , ()=>{
    connect();
    console.log('listening on 8000...');
})