const controller = {
    index: (req, res) => {
        res.render('index');
    },
    registro: (req, res) => {
        res.render('registro');
    },
    login: (req, res) => {
        res.render('login');
    },
    carrito: (req, res) => {
        res.render('carrito');
    },
    detalles: (req, res) => {
        res.render('detalles');
    }
}
module.exports = controller;