const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()

mongoose.connect(process.env.MONGODB_URL)
.then(()=> console.log('MongoDB connected'))
.catch(err => console.log(err));


const app = express()
const PORT = process.env.PORT || 5000