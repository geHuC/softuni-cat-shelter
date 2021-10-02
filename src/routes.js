const express = require('express');
const router = express.Router();

router.use(require('./controllers/homeController'));
router.use('/cats', require('./controllers/catController.js'));

module.exports = router;