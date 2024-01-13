const path = require('path');
const fs = require('fs');
let usuarios = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../database/usuarios.json"), "utf-8")
  );
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');



const controller = {
    registro: (req, res) => {
        let errors = validationResult(req);
        res.render('user/registro', { usuarios });
    },
    create: (req, res) => {
        console.log(req.body);
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let lastUser = usuarios.pop();
            usuarios.push(lastUser);
            //Preparar los datos nuevos
            let newbie = {
                id: lastUser.id + 1,
                nombre: req.body.nombre,
                usuario: req.body.usuario,
                email: req.body.email,
                password: bcryptjs.hashSync(req.body.password, 5),
                avatar: req.file.filename,
                rol: 'cliente'
            };
            console.log(req.file);
            //Agregamos el nuevo usuario al array
            usuarios.push(newbie);
            //Convertimos el array a json
            let newbieGuardar = JSON.stringify(usuarios, null, 2);
            //Guardamos el archivo
            fs.writeFileSync(
                path.resolve(__dirname, "../database/usuarios.json"),
                newbieGuardar
            );
            res.redirect("/");
        } else {
            res.render('user/registro', { errors: errors.array(), old: req.body });
        }
    },
    login: (req, res) => {
        res.render('user/login', { usuarios });
    },
    loguear: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let userjson = fs.readFileSync(path.resolve(__dirname, "../database/usuarios.json"), "utf-8");
            let users = JSON.parse(userjson);
            let usuarioX;
            for (let i=0; i < users.length; i++){
                if(users[i].email== req.body.email){
                    if(bcryptjs.compareSync(req.body.contra, users[i].password)){
                        usuarioX= users[i];
                        break;
                    }
                }
            }
            if(usuarioX == undefined){
                return res.render('user/login', { errors: [
                    {msg: 'Credenciales inválidas'}
                ] });
            }
            req.session.usuarioLogueado = usuarioX;
            res.redirect('/')

        } else {
            return res.render('user/login', { errors: errors.errors });
        }
    },
    carrito: (req, res) => {
        res.render('user/carrito', { usuarios });
    }
}
module.exports = controller;