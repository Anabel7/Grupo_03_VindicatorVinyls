const path = require("path");
const fs = require("fs");

const db = require("../database/models");

const controller = {
  detalles: async (req, res) => {
    try {
      let usuarioLogueado = req.session.usuarioLogueado;
      const product = await db.Product.findByPk(req.params.id, {
        include: [
          { model: db.Artist, as: "artist" },
          { model: db.Label, as: "label" },
          { model: db.Genre, as: "genre" },
        ],
      });
      res.render("producto/detalles", { product });
    } catch (error) {
      console.log("Ha ocurrido un error" + error.message); 
    }
  },
  listadoProductos: async (req, res) => {
    try {
      const products = await db.Product.findAll({
        include: [{ model: db.Artist, as: "artist" }],
      });
      res.render("producto/listado", { products });
    } catch (error) {
      console.log("Ha ocurrido un error" + error.message);
    }
  },
};

module.exports = controller;
