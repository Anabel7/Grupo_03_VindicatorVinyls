const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const multer = require('multer');

router.get('/registro', userController.registro);
router.get('/login', userController.login);
router.get('/carrito', userController.carrito);


module.exports = router;