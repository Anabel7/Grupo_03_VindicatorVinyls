const path = require('path');
const fs = require('fs');
let discos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/discos.json')))

const controller = {
    detalles: (req, res) => {
        res.render('producto/detalles/:id', {discos});
    },
    listadoProductos : (req,res) =>{
        res.render('producto/productos', {discos});
    }
}


module.exports = controller;