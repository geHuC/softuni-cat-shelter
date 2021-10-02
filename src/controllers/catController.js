const express = require('express');
const router = express.Router();

const addCat = (req, res) => {
    res.render('addCat');
}

const addBreed = (req, res) =>
{
    res.render('addBreed');
}

router.get('/add-cat', addCat);
router.get('/add-breed', addBreed);

module.exports = router;

