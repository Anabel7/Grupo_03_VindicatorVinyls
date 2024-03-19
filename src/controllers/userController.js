const path = require("path");
const bcryptjs = require("bcryptjs");
//Requiero la función que trae los errores desde la ruta, si existen
const { validationResult } = require("express-validator");

// const db = require("../database/models");
const { User, Product } = require("../database/models");
const { error, log } = require("console");

const controller = {
  registro: (req, res) => {
    const user = req.session.usuario;
    let errors = validationResult(req);
    res.render("user/registro", { user });
  },
  create: async (req, res) => {
    // console.log(req.body);
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
    res.render("user/login", { user: req.session.usuario });
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
          console.log('usercontroller', user);
          req.session.usuario = user;
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
    const user = req.session.usuario;
    let id = req.params.id;
    let products = discos.find((disco) => {
      return disco.id == id;
    });
    res.render(path.resolve(__dirname, "../views/user/carrito.ejs"), {
      products,
      user
    });
  },
  logout: (req, res) => {
    res.clearCookie("email");
    req.session.destroy();
    res.redirect("/");
  },
};
module.exports = controller;
