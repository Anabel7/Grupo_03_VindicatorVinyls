const path = require('path');
const fs = require('fs');
let usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/usuarios.json')))

const controller = {
    registro: (req, res) => {
        res.render('user/registro', {usuarios});
    },
    login: (req, res) => {
        res.render('user/login', {usuarios});
    },
    carrito: (req, res) => {
        res.render('user/carrito', {usuarios});
    }
}
module.exports = controller;