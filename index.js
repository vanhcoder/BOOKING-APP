const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();
dotenv.config();


const connect = async () => { 
    try {
        await mongoose.connect("mongodb+srv://admin:admin123@cluster1.4oa04pw.mongodb.net/BOOKING?retryWrites=true&w=majority" , {
            useNewUrlParser : true,
            useUnifiedTopology : true
        });
         console.log('Connect to MongoDB');
      } catch (error) {
         throw  error.message;
      }
};

app.listen(8000 , ()=>{
    connect();
    console.log('listening on 8000...');
})