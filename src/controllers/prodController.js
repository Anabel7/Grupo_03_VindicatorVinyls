const path = require("path");
// const fs = require("fs");

const db = require("../database/models");

const controller = {
  detalles: async (req, res) => {
    try {
      const user = req.session.usuario;
      const product = await db.Product.findByPk(req.params.id, {
        include:  ['artist', 'genre', 'label'],
      });
      res.render("producto/detalles", { product, user });
    } catch (error) {
      console.log("Ha ocurrido un error" + error.message); 
    }
  },
  listadoProductos: async (req, res) => {
    try {
      const user = req.session.usuario;
      const products = await db.Product.findAll({
        include: [{ model: db.Artist, as: "artist" }],
      });
      res.render("producto/listado", { products, user });
    } catch (error) {
      console.log("Ha ocurrido un error" + error.message);
    }
  },
};

module.exports = controller;
