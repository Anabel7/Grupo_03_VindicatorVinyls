const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const path = require('path');
const multer = require("multer");

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

router.get("/", adminController.dashboard); //Menu de control del Admin
router.get("/agregarProducto", adminController.create);
router.post("/agregarProducto", upload.single('imagen'), adminController.save);
router.get("/editarProducto/:id", adminController.edit); //edición
router.put("/editarProducto/:id", adminController.update);
router.delete("/delete/:id", adminController.destroy);
router.get('/detalles/:id', adminController.detalles);

module.exports = router;
