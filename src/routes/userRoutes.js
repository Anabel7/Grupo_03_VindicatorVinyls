const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const bcryptjs = require("bcryptjs");
const userController = require("../controllers/userController");
const { body } = require("express-validator");
let usuarios = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../database/usuarios.json"), "utf-8")
);

//Middlewares
let invitados = require("../../middlewares/sinLoguearMiddleware");
let usuarioActivo = require("../../middlewares/logueadoMiddleware");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, "../../public/img/users"));
  },
  filename: (req, file, cb) => {
    let fileName = `${Date.now()}_img_${path.extname(file.originalname)}`;
    console.log(fileName);
    cb(null, fileName);
  },
});
const upload = multer({ storage });


const validacionesRegistro = [
  body("nombre").notEmpty().isLength({ min: 4 }).withMessage("Escribe tu nombre"),
  body("usuario").notEmpty().isLength({ min: 4 }).withMessage("Tu usuario debe tener mínimo 4 caracteres"),
  body("email").isEmail().withMessage("Lindo mail, lástima que no está completo"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("La contraseña es muy corta (Mínimo 8 caracteres)"),
  body("confirm_password")
    .custom((value, { req }) => {
      if (req.body.password == value) {
        return true;
      } else {
        return false;
      }
    })
    .withMessage("Las contraseñas deben ser iguales"),
  body("avatar")
    .custom((value, { req }) => {
      if (req.file != undefined) {
        return true;
      } else {
        return false;
      }
    })
    .withMessage("Debes elegir una imagen"),
];

const validacionesLogin = [
  body("email").isEmail(),
  body("contra")
    .isLength({ min: 6 })
    .withMessage("La contraseña es muy corta (Mínimo 8 caracteres)"),
];

router.get("/registro", userController.registro);
router.post(
  "/registro",
  upload.single("avatar"),
  validacionesRegistro,
  userController.create
);
router.get("/login", userController.login);
router.post("/login", validacionesLogin, userController.loguear);
router.get("/carrito", userController.carrito);

module.exports = router;
