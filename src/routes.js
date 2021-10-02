const express = require('express');
const router = express.Router();

router.use(require('./controllers/homeController'));

module.exports = router;