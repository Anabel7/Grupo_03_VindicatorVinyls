const path = require('path');
const fs = require('fs');
let discos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/productos.json')))

const controller = {
    detalles: (req, res) => {
        res.render('producto/detalles/:id', {discos});
    },
    listadoProductos : (req,res) =>{
        res.render('producto/productos', {discos});
    }
}

//inspirado en el del profe *module.exports = {
//    index: (req,res)=>{
//        let motos = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../database/motos.json')));
//        res.render(path.resolve(__dirname,'../views/productos/productos'),{motos});
//    },
//}

module.exports = controller;