const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.index);
router.get('/generos', mainController.listadoGeneros);
router.get('/generos/rock', mainController.listadoRock)


module.exports = router;