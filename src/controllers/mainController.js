const path = require('path');
const fs = require('fs');
let discos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/discos.json')))

const controller = {
    index: (req, res) => {
        let usuarioLogueado = req.session.usuarioLogueado
        res.render('index', {discos, usuarioLogueado});
    }
}
module.exports = controller;