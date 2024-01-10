const path = require("path");
const fs = require("fs");
let discos = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../database/discos.json"), "utf-8")
);

const controller = {
  dashboard: (req, res) => {
    res.render("admin/dashboard", { discos });
  },
  create: (req, res) => {
    res.render("admin/agregarProducto", { discos });
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
      nuevoProductoGuardar, 'utf-8'
    );
    res.redirect("/admin");
  },
  detalles: (req, res) => {
    let id = req.params.id;
    let discoElegido = discos.find((disco) => {
      return disco.id == id;
    });
    res.render(path.resolve(__dirname, "../views/admin/detalles.ejs"), {
      disco: discoElegido,
    });
  },
  edit: (req, res) => {
    let id = parseInt(req.params.id);
    let discoElegido = discos.find((disco) => disco.id == id);
    res.render("admin/editarProducto", { disco: discoElegido });
  },
  update: (req, res) => {
    let id = parseInt(req.params.id);
    req.body.id = id;
    req.body.imagen = req.file ? req.file.filename : req.body.oldImagen;
    let discosActualizar = discos.map(disco => {
      if (disco.id == id) {
        return (disco = req.body);
      }
      return disco;
    })
    //Convertimos el array a json
   let discosActualizados = JSON.stringify(discosActualizar, null, 2);
    //Guardamos el archivo
    fs.writeFileSync(
      path.resolve(__dirname, "../database/discos.json"),
      discosActualizados, 'utf-8'
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
      discosGuardarFinal, 'utf-8'
    );
    res.redirect("/admin");
  },
};

module.exports = controller;
