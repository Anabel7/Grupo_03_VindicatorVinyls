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
      const artists = await db.Artist.findAll();
      const labels = await db.Label.findAll();
      // console.log(genres, products);
      res.render("admin/agregarProducto", {
        products,
        user,
        genres,
        artists,
        labels,
      });
    } catch (error) {
      console.log("Ha ocurrido un error" + error.message);
    }
  },
  save: async (req, res) => {
    let user = req.session.usuario;
    try {
      const {
        product_title,
        artist_name,
        genre_name,
        label_name,
        product_info,
        price,
        stock,
        release_date,
        tracklist,
      } = req.body;

      console.log(req.body);
      // Buscar el artista por su nombre
      const artist = await db.Artist.findOne({ where: { artist_name } });
      // console.log('artista encontrado: ', artist);
      // Buscar el género por su nombre
      const genre = await db.Genre.findOne({ where: { genre_name } });
      // console.log('genero encontrado: ', genre);
      // Buscar la discográfica por su nombre
      const label = await db.Label.findOne({ where: { label_name } });
      // console.log('label encontrado: ', label);
      // Verificar si se encontraron todos los registros necesarios
      if (!artist) {
        throw new Error("No se encontró el artista");
      }
      if (!genre) {
        throw new Error("No se encontró el género.");
      }
      if (!label) {
        throw new Error("No se encontró la discográfica.");
      }
      // console.log(artist.artist_id);
      // Crear el producto con los IDs encontrados
      await db.Product.create({
        product_title,
        artist_id: artist.artist_id,
        genre_id: genre.genre_id,
        label_id: label.label_id,
        product_info,
        price,
        stock,
        release_date,
        tracklist,
        cover_path: req.file.filename,
      });

      res.redirect("/admin");
    } catch (error) {
      console.log("Ha ocurrido un error: " + error.message);
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
      const genres = await db.Genre.findAll();
      const artists = await db.Artist.findAll();
      const labels = await db.Label.findAll();
      res.render("admin/editarProducto", {
        product,
        user,
        genres,
        artists,
        labels,
      });
    } catch (error) {
      console.log("Ha ocurrido un error" + error.message);
    }
  },
  update: async (req, res) => {
    try {
      const {
        product_title,
        artist_name,
        product_info,
        price,
        genre_name,
        stock,
        release_date,
        tracklist,
        label_name,
      } = req.body;

      // Buscar el artista por su nombre
      const artist = await db.Artist.findOne({ where: { artist_name } });
      if (!artist) {
        throw new Error("No se encontró el artista");
      }

      // Buscar el género por su nombre
      const genre = await db.Genre.findOne({ where: { genre_name } });
      if (!genre) {
        throw new Error("No se encontró el género");
      }

      // Buscar la discográfica por su nombre
      const label = await db.Label.findOne({ where: { label_name } });
      if (!label) {
        throw new Error("No se encontró la discográfica");
      }

      // Actualizar el producto
      await db.Product.update(
        {
          product_title,
          artist_id: artist.artist_id,
          genre_id: genre.genre_id,
          product_info,
          price,
          stock,
          release_date,
          tracklist,
          label_id: label.label_id,
          cover_path: req.file ? req.file.filename : req.body.oldImagen,
        },
        {
          where: { product_id: req.params.id },
        }
      );

      res.redirect("/admin");
    } catch (error) {
      console.log("Ha ocurrido un error: " + error.message);
      res.status(500).send("Ha ocurrido un error al actualizar el producto");
    }
  },
  destroy: (req, res) => {
    db.Product.destroy({
      where: {
        product_id: req.params.id,
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
