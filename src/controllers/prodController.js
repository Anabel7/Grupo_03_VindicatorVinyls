const path = require('path');
const fs = require('fs');
let discos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/discos.json'), 'utf-8'));

const db = require('../database/models');

const controller = {
    detalles: (req, res) => {
        let usuarioLogueado = req.session.usuarioLogueado
        let id = req.params.id;
        let discoElegido = discos.find(disco => {
            return disco.id== id
        })
        res.render(path.resolve(__dirname, '../views/producto/detalles.ejs'), {disco: discoElegido, usuarioLogueado});
    },
    listadoProductos : async (req,res) => {
        try{
            const products = await db.Product.findAll()
            res.render('listado', {products}) 
        } catch(error){
            console.log('Ha ocurrido un error'+ error.message);
        }
        // let usuarioLogueado = req.session.usuarioLogueado
        // res.render(path.resolve(__dirname, '../views/producto/listado.ejs'), {discos: discos, usuarioLogueado});
    }
}


module.exports = controller;