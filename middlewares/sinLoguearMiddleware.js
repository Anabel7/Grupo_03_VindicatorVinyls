function sinLoguearMiddleware(req,res,next){
    if(req.session.usuarioLogueado == null){
        next();
    } else {
        res.send('Ya has iniciado sesión');
    }
}
module.exports = sinLoguearMiddleware;