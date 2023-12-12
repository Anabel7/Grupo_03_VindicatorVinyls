const controller = {
    admin: (req, res) => {
        res.render('prod/admin');
    },
    agregarProducto: (req, res) => {
        res.render('prod/agregarProducto');
    },
    editarProducto: (req,res) => {
        res.render('prod/editarProducto');
    },
    detalles: (req, res) => {
        res.render('prod/detalles');
    }
}
module.exports = controller;