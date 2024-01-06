const path = require('path');
const fs = require('fs');
let usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/usuarios.json'), 'utf-8'));


const controller = {
    registro: (req, res) => {
        res.render('user/registro', { usuarios });
    },
    registrar: (req, res) => {
        console.log(req.body);
        let lastUser = usuarios.pop();
        usuarios.push(lastUser);
        //Preparar los datos nuevos
        let newbie = {
            id: lastUser.id + 1,
            nombre: req.body.nombre,
            usuario: req.body.username,
            email: req.body.email,
            password: req.body.password,
            avatar: null,
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
    },
    login: (req, res) => {
        res.render('user/login', { usuarios });
    },
    loguear: (req,res) => {

    },
    carrito: (req, res) => {
        res.render('user/carrito', { usuarios });
    }
}
module.exports = controller;