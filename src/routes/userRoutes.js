const express = require('express');
const router = express.Router();
let invitados = require('../../middlewares/sinLoguearMiddleware')
let usuarioActivo =require('../../middlewares/logueadoMiddleware')
const userController = require('../controllers/userController');
const {body} = require('express-validator');

const validacionesRegistro = [
    body('nombre').notEmpty().withMessage('¿Quién sos?'),
    body('usuario').notEmpty(),
    body('email').isEmail().withMessage('Lindo mail, lástima que no sirve'),
    body('password').isLength({min: 6}).withMessage("La contraseña es muy corta (Mínimo 8 caracteres)"),
    body('confirm_password').isLength({min: 6}).withMessage("La contraseña es muy corta (Mínimo 8 caracteres)")
]
const validacionesLogin = [
    body('email').isEmail(),
    body('contra').isLength({min: 6}).withMessage("La contraseña es muy corta (Mínimo 8 caracteres)"),
]
const multer = require('multer');

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

router.get('/registro', invitados,userController.registro);
router.post("/registro", validacionesRegistro, userController.registrar);
router.get('/login', invitados,userController.login);
router.post('/login', validacionesLogin, userController.loguear);
router.get('/carrito', usuarioActivo, userController.carrito);


module.exports = router;