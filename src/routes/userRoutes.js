const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const {body} = require('express-validator');
const validacionesRegistro = [
    body('nombre').notEmpty().withMessage('¿Quién sos?'),
    body('usuario').notEmpty(),
    body('email').isEmail().withMessage('Lindo mail, lástima que no sirve'),
    body('password').notEmpty(),
    body('confirm_password').notEmpty()
]
const validacionesLogin = [
    body('mail').notEmpty(),
    body('contra').notEmpty(),
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

router.get('/registro', userController.registro);
router.post("/registro", validacionesRegistro, userController.registrar);
router.get('/login', userController.login);
router.post('/login', validacionesLogin, userController.loguear);
router.get('/carrito', userController.carrito);


module.exports = router;