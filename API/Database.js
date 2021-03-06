const mongoose = require('mongoose');
require('dotenv').config()
const URI = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:27017/practica1?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false`;
mongoose.connect(
    URI,
    async(err)=>{
        if(err) throw err;
        console.log("conncted to db")
    }
)
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected');
})