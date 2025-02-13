const express = require('express');
const { generateNewURL } = require('../controllers/url');
const router = express.Router();

router.post('/', generateNewURL);

module.exports = router;
