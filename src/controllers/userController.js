const controller = {
    admin: (req, res) => {
        res.render('admin');
    },
    agregarProducto: (req, res) => {
        res.render('agregarProducto');
    },
    editarProducto: (req,res) => {
        res.render('editarProducto');
    }
}
module.exports = controller;