const express = require('express');
const catSevice = require('../services/catService.js');
const router = express.Router();

const home = async (req, res) => {
    let cats = await catSevice.all();
    res.render('index',{cats});
}

router.get('/', home);

module.exports = router;

