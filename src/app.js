import express from 'express';
import loanRouter from './routes/loansRoutes.js';
import orgRouter from './routes/orgRoutes.js';
import {DATABASE_URL,DB_OPTIONS} from './constant.js';
import connectDB from './db/connectDB.js';

const app = new express()
const PORT = 3000


connectDB(DATABASE_URL,DB_OPTIONS)
app.use(express.json())
app.use("/loan", loanRouter)
app.use("/org", orgRouter)

app.listen(PORT, ()=>{
    console.log(`Starting server at ${PORT}`);
})