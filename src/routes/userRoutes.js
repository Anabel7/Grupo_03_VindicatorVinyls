const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/admin', userController.admin);
router.get('/agregarProducto', userController.agregarProducto);
router.get('/editarProducto', userController.editarProducto);

module.exports = router;