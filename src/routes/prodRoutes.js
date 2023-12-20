const express = require('express');
const router = express.Router();
const prodController = require('../controllers/prodController');
const multer = require('multer');

router.get('/:id', prodController.detalles);
router.get('/productos', prodController.listadoProductos);


module.exports = router;