const path = require("path");
const fs = require("fs");
// let discos = JSON.parse(
//   fs.readFileSync(path.resolve(__dirname, "../database/discos.json"), "utf-8")
// );
const db = require("../database/models");

const controller = {
  dashboard: (req, res) => {
    async (req, res) => {
      try {
        let usuarioLogueado = req.session.usuarioLogueado;
        const products = await db.Product.findAll({
          include: [{ model: db.Artist, as: "artist" }],
        });
        res.render("admin/dashboard", { products });
      } catch (error) {
        console.log("Ha ocurrido un error" + error.message);
      }
    };
  },
  create: (req, res) => {
    let usuarioLogueado = req.session.usuarioLogueado;
    res.render("admin/agregarProducto", { User });
  },
  save: (req, res) => {
    console.log(req.body);
    let ultimoDisco = discos.pop();
    discos.push(ultimoDisco);
    //Preparar los datos nuevos
    let nuevoProducto = {
      id: ultimoDisco.id + 1,
      disco: req.body.disco,
      artista: req.body.artista,
      descripcion: req.body.descripcion,
      precio: req.body.precio,
      genero: req.body.genero,
      stock: req.body.stock,
      anio: req.body.anio,
      imagen: req.file.filename,
      tracklist: req.body.tracklist,
      discografica: req.body.discografica,
    };
    console.log(req.file);
    //Agregamos el nuevo disco al array
    discos.push(nuevoProducto);
    //Convertimos el array a json
    let nuevoProductoGuardar = JSON.stringify(discos, null, 2);
    //Guardamos el archivo
    fs.writeFileSync(
      path.resolve(__dirname, "../database/discos.json"),
      nuevoProductoGuardar,
      "utf-8"
    );
    res.redirect("/admin");
  },
  detalles: (req, res) => {
    async (req, res) => {
      try {
        let usuarioLogueado = req.session.usuarioLogueado;
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
    let usuarioLogueado = req.session.usuarioLogueado;
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
