const controller = {
    registro: (req, res) => {
        res.render('user/registro');
    },
    login: (req, res) => {
        res.render('user/login');
    },
    carrito: (req, res) => {
        res.render('user/carrito');
    }
}
module.exports = controller;