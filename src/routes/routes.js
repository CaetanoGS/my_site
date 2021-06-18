const express = require('express');
const home = require('../controller/homePageController');
const router = express.Router();

router.get('/', home.homePage);

module.exports = router;