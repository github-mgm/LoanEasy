import DATABASE_URL from './constant.js';
import express from 'express';
import connectDB from './db/connectDB.js';

const app = new express()



app.get('/',(req,res,err)=> {
    res.send("Mahak")
})

connectDB(DATABASE_URL)

app.listen(5000)