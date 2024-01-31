function logueadoMiddleware(req, res, next) {
  if (req.session.usuarioLogueado != null) {
    next();
  } else {
    res.redirect("/user/login");
  }
}
module.exports = logueadoMiddleware;
