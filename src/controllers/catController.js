const express = require('express');
const breedService = require('../services/breedService.js');
const router = express.Router();

const addCatView = (req, res) => {
    res.render('addCat');
}

const addBreedView = (req, res) => {
    res.render('addBreed');
}

const addBreedPost = async (req, res) => {
    let { breed } = req.body;
    await breedService.create(breed);
    res.redirect('/');
}

router.get('/add-cat', addCatView);
router.get('/add-breed', addBreedView);
router.post('/add-breed', addBreedPost);


module.exports = router;

