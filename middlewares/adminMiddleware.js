function adminMiddleware(req, res, next) {
    if (req.session.usuarioLogueado.rol == 'admin') {
        next();
    } else {
        res.send('Esta página es solo para administradores')
    }
}
module.exports = adminMiddleware;
