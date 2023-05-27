const express = require('express');
const { json } = require('stream/consumers');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const connetDb = require('./config/db');
const colors = require('colors');

const port = process.env.PORT || 8000
const app = express();

app.get('/',(reg,res)=>{
    res.send("Hello server!!")
})


connetDb();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals',require('./routes/goalRouts'))
app.use('/api/users',require('./routes/userRouts'))

app.use(errorHandler);

app.listen (port , ()=>{
    console.log(`the app is running on http://localhost:${port}`)
})

