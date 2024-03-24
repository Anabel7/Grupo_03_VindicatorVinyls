const path = require("path");
const fs = require("fs");
// let discos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/discos.json')))
const db = require("../database/models");

const controller = {
  index: async (req, res) => {
    try {
      const user = req.session.usuario;
      const products = await db.Product.findAll({
        include:  ['artist', 'genre']
      });
      res.render("index", {
        products,
        user,
      });
    } catch (error) {
      console.log(`Ha ocurrido un error ${error.message}`);
    }
  },
  listadoGeneros: async (req, res) => {
    try {
      const user = req.session.usuario;
      const products = await db.Product.findAll({
        include: [{ model: db.Artist, as: "artist" }],
      });
      res.render("generos", { products, user });
    } catch (error) {
      console.log("Ha ocurrido un error" + error.message);
    }
  },
  listadoRock: async (req, res) => {
    try {
      const user = req.session.usuario;
      const products = await db.Product.findAll({
        include: [{ model: db.Artist, as: "artist" }],
      });
      res.render("rock", { products, user });
    } catch (error) {
      console.log("Ha ocurrido un error" + error.message);
    }
  }
};

module.exports = controller;
