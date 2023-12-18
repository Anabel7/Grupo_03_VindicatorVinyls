const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const multer = require('multer');

router.get('/:id', adminController.detalles); //detalles
router.get('/agregarProducto', adminController.agregarProducto); //Create
router.get('/:id/editarProducto', adminController.editarProducto); //edición
router.get('/', adminController.listado); //Listado de productos


module.exports = router;