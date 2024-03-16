const path = require("path");

const db = require("../database/models");

const controller = {
  dashboard: async (req, res) => {
    try {
      let user = req.session.usuario;
      const products = await db.Product.findAll({
        include: [{ model: db.Artist, as: "artist" }],
      });
      res.render("admin/dashboard", { products, user });
    } catch (error) {
      console.log("Ha ocurrido un error" + error.message);
    }
  },
  create: async (req, res) => {
    try {
      let user = req.session.usuario;
      const products = await db.Product.findAll({
        include: [
          { model: db.Artist, as: "artist" },
          { model: db.Label, as: "label" },
          { model: db.Genre, as: "genre" },
        ],
      });
      const genres = await db.Genre.findAll();
      res.render("admin/agregarProducto", { products, user, genres });
    } catch (error) {
      console.log("Ha ocurrido un error" + error.message);
    }
  },
  save: async (req, res) => {
    console.log(req.body);
    try {
      await db.Product.create({
        product_title: req.body.product_title,
        artist_name: req.body.artist_name,
        product_info: req.body.product_info,
        price: req.body.price,
        genre: req.body.genre_name,
        stock: req.body.stock,
        release_date: req.body.release_date,
        cover_path: req.file.filename,
        tracklist: req.body.tracklist,
        label_name: req.body.label_name,
      });
      // console.log(req.file);
      res.redirect("/admin");
    } catch (error) {
      console.log("Ha ocurrido un error" + error.message);
      res.status(500).send("Ha ocurrido un error al crear el producto");
    }
  },
  detalles: async (req, res) => {
    try {
      const user = req.session.usuario;
      const product = await db.Product.findByPk(req.params.id, {
        include: [
          { model: db.Artist, as: "artist" },
          { model: db.Label, as: "label" },
          { model: db.Genre, as: "genre" },
        ],
      });
      res.render("admin/detalles", { product, user });
    } catch (error) {
      console.log("Ha ocurrido un error" + error.message);
    }
  },
  edit: async (req, res) => {
    try {
      const user = req.session.usuario;
      const product = await db.Product.findByPk(req.params.id, {
        include: [
          { model: db.Artist, as: "artist" },
          { model: db.Label, as: "label" },
          { model: db.Genre, as: "genre" },
        ],
      });
      res.render("admin/editarProducto", { product, user });
    } catch (error) {
      console.log("Ha ocurrido un error" + error.message);
    }
  },
  update: async (req, res) => {
    try {
      await db.Product.update(
        {
          product_title: req.body.product_title,
          artist_name: req.body.artist_name,
          product_info: req.body.product_info,
          price: req.body.price,
          genre: req.body.genre_name,
          stock: req.body.stock,
          release_date: req.body.release_date,
          tracklist: req.body.tracklist,
          label_name: req.body.label_name,
          cover_path: req.file ? req.file.filename : req.body.oldImagen,
        },
        {
          where: { id: req.params.id },
        }
      );
      res.redirect("/admin");
    } catch (error) {
      console.log("Ha ocurrido un error" + error.message);
      res.status(500).send("Ha ocurrido un error al crear el producto");
    }
  },
  destroy: (req, res) => {
    db.Product.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(() => {
        res.redirect("/admin");
      })
      .catch((error) => {
        console.log("Ha ocurrido un error: " + error.message);
        res.status(500).send("Ha ocurrido un error al eliminar el producto");
      });
  },
};

module.exports = controller;
