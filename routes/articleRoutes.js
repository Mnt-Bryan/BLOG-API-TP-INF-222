const express = require('express');
const router = express.Router();
const controller = require('../controllers/articleController');

router.post('/', controller.create);
router.get('/', controller.getAll);
router.get('/search', controller.search);
router.get('/:id', controller.getOne);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;