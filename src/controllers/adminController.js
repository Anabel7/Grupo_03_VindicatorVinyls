const path = require('path');
const fs = require('fs');
let discos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/discos.json')))

const controller = {
    agregarProducto: (req, res) => {
        res.render('admin/agregarProducto', {discos});
    },
    editarProducto: (req, res) => {
        res.render('admin/editarProducto', {discos});
    },
    listado: (req, res) => {
        res.render('admin/listado', {discos});
    } //LIstado
}

module.exports = controller;