const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.index);
router.get('/registro', mainController.registro);
router.get('/login', mainController.login);
router.get('/carrito', mainController.carrito);
router.get('/detalles', mainController.detalles);

module.exports = router;