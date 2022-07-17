const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();
dotenv.config();


const connect = async () => { 
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Connect to MongoDB');
      } catch (error) {
         throw  error ;
      }
};

app.listen(8000 , ()=>{
    connect();
    console.log('listening on 8000...');
})