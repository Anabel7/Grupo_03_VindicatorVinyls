const path = require("path");
const fs = require("fs");
// let discos = JSON.parse(
//   fs.readFileSync(path.resolve(__dirname, "../database/discos.json"), "utf-8")
// );
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
  create: (req, res) => {
    let user = req.session.usuario;
    res.render("admin/agregarProducto", { user });
  },
  save: async (req, res) => {
    console.log(req.body);
    try {
      let nuevoProducto = await Product.create({
        product_title: req.body.product_title,
        artist_name: req.body.artist_name,
        descripcion: req.body.product_info,
        precio: req.body.precio,
        genero: req.body.genre_name,
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
  detalles: (req, res) => {
    async (req, res) => {
      try {
        const user = req.session.usuario;
        const product = await db.Product.findByPk(req.params.id, {
          include: [
            { model: db.Artist, as: "artist" },
            { model: db.Label, as: "label" },
            { model: db.Genre, as: "genre" },
          ],
        });
        res.render("/admin/detalles", { product });
      } catch (error) {
        console.log("Ha ocurrido un error" + error.message);
      }
    };
  },
  edit: (req, res) => {
    const user = req.session.usuario;
    let id = parseInt(req.params.id);
    let discoElegido = discos.find((disco) => disco.id == id);
    res.render("admin/editarProducto", {
      disco: discoElegido,
      usuarioLogueado,
    });
  },
  update: (req, res) => {
    let id = parseInt(req.params.id);
    req.body.id = id;
    req.body.imagen = req.file ? req.file.filename : req.body.oldImagen;
    let discosActualizar = discos.map((disco) => {
      if (disco.id == id) {
        return (disco = req.body);
      }
      return disco;
    });
    //Convertimos el array a json
    let discosActualizados = JSON.stringify(discosActualizar, null, 2);
    //Guardamos el archivo
    fs.writeFileSync(
      path.resolve(__dirname, "../database/discos.json"),
      discosActualizados,
      "utf-8"
    );
    res.redirect("/admin");
  },
  destroy: (req, res) => {
    let id = parseInt(req.params.id);
    let discosFinal = discos.filter((disco) => disco.id != id);
    //Convertimos el array a json
    let discosGuardarFinal = JSON.stringify(discosFinal, null, 2);
    //Guardamos el archivo
    fs.writeFileSync(
      path.resolve(__dirname, "../database/discos.json"),
      discosGuardarFinal,
      "utf-8"
    );
    res.redirect("/admin");
  },
};

module.exports = controller;
