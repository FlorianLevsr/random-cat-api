const express = require('express');

const catController = require('../controllers/catController');

const router = express.Router();

router.get('/', catController.getAll);
router.get('/:id(\\d+)', catController.getOne);
router.get('/random', catController.getRandomOne);
router.get('/category/:id(\\d+)', catController.getOnesByCategory);
router.get('/search/:userRequest', catController.searchOne);

module.exports = router;