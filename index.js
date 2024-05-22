const express = require('express');

const app = express();
const cors = require('cors'); 
const mongoose = require('mongoose');
const {getMovies} = require('./controllers/movie.controller')
const port = 3000;
require('dotenv').config();
app.use(express.json())
app.use(cors());



app.get('/movies',getMovies)



app.listen(port,async()=>{

    await mongoose.connect("mongodb://localhost:27017/moviesdb")
    console.log('server listening on port 3000');

})