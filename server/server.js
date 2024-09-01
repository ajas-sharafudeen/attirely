const express = require('express')
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://ajassharaf:74cb9F2e7PRGfDxh@cluster0.0aved.mongodb.net/')
.then(()=> console.log('MongoDB connected'))
.catch(err => console.log(err));


const app = express()
const PORT = process.env.PORT || 5000