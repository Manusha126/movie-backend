const { MoviesModel } = require("../models/movieList.model")

const getMovies = async(req,res) => {
    const {q,category} = req.query;
  console.log(q);
    if(q){
        const movies = await MoviesModel.find({genre : {$regex:q ,$options:'i'}})
        res.status(200).json(movies)
    }else{
        const data = await MoviesModel.find({})
        res.send(data).status(200)
    }
}


module.exports ={
    getMovies 
    
}