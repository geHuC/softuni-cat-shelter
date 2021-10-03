const express = require('express');
const upload = require('../config/multer.js');
const breedService = require('../services/breedService.js');
const catSevice = require('../services/catService.js');
const router = express.Router();

const addCatView = async (req, res) => {
    let breeds = await breedService.all();
    res.render('addCat', { options: breeds });
}

const addBreedView = (req, res) => {
    res.render('addBreed');
}

const addBreedPost = async (req, res) => {
    let { breed } = req.body;
    await breedService.create(breed);
    res.redirect('/');
}
const addCatPost = async (req, res) => {
    await catSevice.create(req.body, req.files[0]);
    res.redirect('/');
}

const shelterCatView = async (req, res) => {
    let cat = await catSevice.getById(req.params.catId);
    console.log(cat);
    res.render('catShelter',{cat});
}

router.get('/add-cat', addCatView);
router.post('/add-cat', upload.any(), addCatPost);
router.get('/add-breed', addBreedView);
router.post('/add-breed', addBreedPost);
router.get('/shelter/:catId', shelterCatView)


module.exports = router;

