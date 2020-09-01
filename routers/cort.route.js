const express = require('express');

const router = express.Router();

const cortController = require('../controller/cortController');


router.post('/addCort/', cortController.addCort);

module.exports = router;