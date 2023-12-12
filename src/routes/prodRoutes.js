const express = require('express');
const router = express.Router();
const prodController = require('../controllers/prodController');
const multer = require('multer');

router.get('/detalles', prodController.detalles);
router.get('/agregarProducto', prodController.agregarProducto);
router.get('/editarProducto', prodController.editarProducto);
router.get('/admin', prodController.admin);

module.exports = router;