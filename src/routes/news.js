const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/NewsController')

router.post('/', newsController.index)
router.get('/', newsController.get)
router.get('/:id', newsController.show)
module.exports = router;