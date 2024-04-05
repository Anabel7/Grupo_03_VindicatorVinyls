const express = require("express");
const router = express.Router();
// const fs = require("fs");
const path = require("path");
const multer = require("multer");

const userController = require("../controllers/userController");
const { body } = require("express-validator");
const { User } = require("../database/models");


//Middlewares
const logMid = require("../../middlewares/logueadoMiddleware");
const loglessMid = require("../../middlewares/sinLoguearMiddleware");

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
  body("name").isLength({ min: 4 }).withMessage("Escribe tu nombre (mínimo 4 caracteres)"),
  body("user").isLength({ min: 4 }).withMessage("Tu usuario debe tener mínimo 4 caracteres"),
  body("email").isEmail().withMessage("Agregá un e-mail válido")
  .custom(async(value)=>{
    const userRegistrado = await User.findOne({
      where: {
        email: value
      }
    });
    if(userRegistrado){
      throw new Error("El correo electrónico ya está registrado");
      }
      return true;
  }),
  body("password")
    .isLength({ min: 8 })
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
  body("avatar_path")
    .custom((value, { req }) => {
      let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
      if (req.file != undefined) {
        const ext = path.extname(req.file.filename).toLowerCase();
        return acceptedExtensions.includes(ext)
      } else {
        return false;
      }
    })  
    .withMessage("Debes elegir una imagen para tu avatar (jpg, jpeg, png o gif)"),
];

const validacionesLogin = [
  body("email").isEmail().withMessage('Agrega un e-mail válido'),
  body("password")
    .isLength({ min: 8 })
    .withMessage("La contraseña es muy corta (Mínimo 8 caracteres)")
];

router.get("/registro", loglessMid, userController.registro);
//Ruta que envia al controlador el avatar de usuario y las validaciones
router.post(
  "/registro",
  upload.single("avatar_path"),
  validacionesRegistro,
  userController.create
);
router.get("/login", loglessMid, userController.login);
router.post("/login", validacionesLogin, userController.ingresar);
router.get("/carrito", logMid, userController.carrito);
router.get('/logout', userController.logout);
router.get("/perfil", logMid, userController.perfil)

module.exports = router;
