const express = require('express');

const catController = require('../controllers/catController');

const router = express.Router();

router.get('/', catController.getAll);


module.exports = router;