const express = require('express');
const Breed = require('../Models/Breed.js');
const router = express.Router();

const addCatView = (req, res) => {
    res.render('addCat');
}

const addBreedView = (req, res) => {
    res.render('addBreed');
}

const addBreedPost = async (req, res) => {
    let { breed } = req.body;

    if(await Breed.exists({breed: breed})){
        console.log(breed, ' already exists in the database');
        res.redirect('/');
        return;
    }

    let newBreed = new Breed({breed: breed});
    await newBreed.save();
    res.redirect('/');
}

router.get('/add-cat', addCatView);
router.get('/add-breed', addBreedView);
router.post('/add-breed', addBreedPost);


module.exports = router;

