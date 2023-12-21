const path = require('path');
const fs = require('fs');
let discos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/discos.json')))

const controller = {
    index: (req, res) => {
        res.render('index', {discos});
    }
}
module.exports = controller;