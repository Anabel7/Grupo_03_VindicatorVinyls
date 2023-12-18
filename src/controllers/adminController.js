const controller = {
    agregarProducto: (req, res) => {
        res.render('admin/agregarProducto');
    },
    editarProducto: (req, res) => {
        res.render('admin/editarProducto');
    },
    detalles: (req, res) => {
        res.render('admin/:id');
    },
    listado: (req, res) => {
        res.render('admin/listado');
    } //LIstado
}

module.exports = controller;