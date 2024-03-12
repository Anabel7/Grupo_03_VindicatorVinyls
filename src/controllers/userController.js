const path = require("path");
const bcryptjs = require("bcryptjs");
//Requiero la función que trae los errores desde la ruta, si existen
const { validationResult } = require("express-validator");

// const db = require("../database/models");
const { User, Product } = require("../database/models");
const { error } = require("console");

const controller = {
  registro: (req, res) => {
    let errors = validationResult(req);
    res.render("user/registro", { User });
  },
  create: async (req, res) => {
    console.log(req.body);
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      try {
        //Preparar los datos nuevos
        let newbie = await User.create({
          name: req.body.name,
          user: req.body.user,
          email: req.body.email,
          password: bcryptjs.hashSync(req.body.password, 10),
          avatar_path: req.file.filename,
          rol: "cliente",
        });
        res.redirect("/user/login");
      } catch (error) {
        console.log("Ha ocurrido un error" + error.message);
        res.render("user/registro", { errors: errors.array(), old: req.body });
      }
    } else {
      res.render("user/registro", { errors: errors.array(), old: req.body });
    }
  },
  login: (req, res) => {
    res.render("user/login", { User });
  },
  ingresar: async (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      try {
        const user = await User.findOne({
          where: {
            email: req.body.email,
          },
        });
        if (user && bcryptjs.compareSync(req.body.password, user.password)) {
          req.session.usuarioLogueado = user;
          if (req.body.recordarme) {
            res.cookie("email", user.email, { maxAge: 1000 * 60 * 60 * 24 });
          }
          // Redirecciona
          return res.redirect("/");
        } else {
          return res.render("user/login", {
            errors: [{ msg: "Credenciales inválidas" }],
          });
        }
      } catch (error) {
        console.log(error);
        return res.render("user/login", {
          errors: [{ msg: "Error al iniciar sesión" }],
        });
      }
    }
  },
  carrito: (req, res) => {
    let usuarioLogueado = req.session.usuarioLogueado;
    let id = req.params.id;
    let discoElegido = discos.find((disco) => {
      return disco.id == id;
    });
    res.render(path.resolve(__dirname, "../views/user/carrito.ejs"), {
      disco: discoElegido,
      usuarioLogueado,
    });
  },
  logout: (req, res) => {
    req.session.destroy();
    res.cookie("email", null, { maxAge: -1 });
    res.redirect("/");
  },
};
module.exports = controller;
