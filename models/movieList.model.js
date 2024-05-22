const mongoose  = require("mongoose");


const MoviesSchema = new mongoose.Schema({
    title: { type: String},
    languages : { type: [String]},
    genre: { type: String},
    release_year: { type: String},
    rating: { type: Number},
    duration: { type:Number},
    revenue: { type: Number},
    imageUrl: { type: String}
})


const MoviesModel = mongoose.model('movies',MoviesSchema)

module.exports = {
     MoviesModel
}