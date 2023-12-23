const path = require('path');
const fs = require('fs');
let discos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/discos.json'), 'utf-8'));

const controller = {
    detalles: (req, res) => {
        let id = req.params.id;
        let discoElegido = discos.find(disco => {
            return disco.id== id
        })
        res.render(path.resolve(__dirname, '../views/producto/detalles.ejs'), {disco: discoElegido});
    },
    listadoProductos : (req,res) => {
        res.render(path.resolve(__dirname, '../views/producto/listado.ejs'), {discos: discos});
    }
}


module.exports = controller;