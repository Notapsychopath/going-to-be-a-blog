const express = require('express')
const mongoose = require('mongoose')
const bodyParser=require('body-parser')

const app = express();

const items=require('./routes/api/items')

//Bodyparser
app.use(bodyParser.json())

//mongoDB URL
const db = require('./config/keys').mongoURI

//Connect to MongoDB
mongoose
    .connect(db)
    .then(()=>console.log('MongoDB connected'))
    .catch(err=>console.log(err))

//Use routes
app.use('/api/items', items)
//server
const port=process.env.PORT||5000

app.listen(port, ()=>console.log(`Server started on port ${port}`))