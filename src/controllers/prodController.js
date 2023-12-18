const controller = {
    detalles: (req, res) => {
        res.render('producto/detalles/:id');
    }
}
module.exports = controller;