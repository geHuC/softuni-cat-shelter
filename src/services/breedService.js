const Breed = require("../Models/Breed.js");

const create = async (type) => {
    if(await Breed.exists({breed: type})){
        console.log(type, ' already exists in the database');
        res.redirect('/');
        return;
    }
    
    await Breed.create({breed: type});
}

const breedService = {
    create,
}

module.exports = breedService;