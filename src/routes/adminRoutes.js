const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const path = require('path');
const multer = require("multer");
const adminMiddleware = require('../../middlewares/adminMiddleware')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, "../../public/img/products"));
  },
  filename: (req, file, cb) => {
    let fileName = `${Date.now()}_img_${path.extname(file.originalname)}`;
    console.log(fileName);
    cb(null, fileName);
  },
});

const upload = multer({storage});

router.get("/", adminMiddleware, adminController.dashboard); //Menu de control del Admin
router.get("/agregarProducto", adminMiddleware, adminController.create);
router.post("/agregarProducto", upload.single('imagen'), adminController.save);
router.get('/detalles/:id', adminMiddleware, adminController.detalles);
router.get("/editarProducto/:id", adminMiddleware, adminController.edit); //edición
router.put("/editarProducto/:id", upload.single('imagen'), adminController.update);
router.delete("/delete/:id", adminController.destroy);


module.exports = router;
