const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const path = require("path");
const multer = require("multer");
const adminMiddleware = require("../../middlewares/adminMiddleware");
const { body } = require("express-validator");

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

const upload = multer({ storage });

const validacionesCreate = [
  body("product_title")
    .isLength({ min: 5 })
    .withMessage("Debes escribir un título (Mínimo 5 caracteres)"),
  body("product_info")
    .isLength({ min: 20 })
    .withMessage("Escribe una descripción (Mínimo 20 caracteres)"),
  body("price").notEmpty().withMessage("Falta el precio"),
  body("tracklist")
    .isLength({ min: 15 })
    .withMessage("Escribe la tracklist (Mínimo 15 caracteres)"),
  body("stock").notEmpty().withMessage("Falta la cantidad en stock"),
  body("cover_path")
    .custom((value, { req }) => {
      let acceptedExtensions = [".jpg", ".jpeg", ".png", ".gif"];
      if (req.file != undefined) {
        const ext = path.extname(req.file.filename).toLowerCase();
        return acceptedExtensions.includes(ext);
      } else {
        return false;
      }
    })
    .withMessage("Debes elegir una imagen válida (jpg, jpeg, png o gif)"),
];

router.get("/", adminMiddleware, adminController.dashboard); //Menu de control del Admin
router.get("/agregarProducto", adminMiddleware, adminController.create);
router.post(
  "/agregarProducto",
  upload.single("cover_path"),
  validacionesCreate,
  adminController.save
);
router.get("/detalles/:id", adminMiddleware, adminController.detalles);
router.get("/editarProducto/:id", adminMiddleware, adminController.edit); //edición
router.put(
  "/editarProducto/:id",
  upload.single("cover_path"),
  adminController.update
);
router.delete("/delete/:id", adminController.destroy);

module.exports = router;
