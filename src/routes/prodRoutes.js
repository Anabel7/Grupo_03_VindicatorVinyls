const express = require('express');
const router = express.Router();
const prodController = require('../controllers/prodController');
const multer = require('multer');

router.get('/detalles/:id', prodController.detalles);
router.get('/listado', prodController.listadoProductos);


module.exports = router;