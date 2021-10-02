const express = require('express');
const router = express.Router();

const addCat = (req, res) => {
    res.render('addCat');
}

router.get('/add-cat', addCat);

module.exports = router;

