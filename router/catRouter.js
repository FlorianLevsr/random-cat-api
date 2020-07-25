const express = require('express');

const catController = require('../controllers/catController');

const router = express.Router();

router.get('/', catController.getAll);
router.get('/:id(\\d+)', catController.getOne);
router.get('/random', catController.getRandomOne);

module.exports = router;