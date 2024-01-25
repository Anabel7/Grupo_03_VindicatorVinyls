function logueadoMiddleware(req, res, next) {
  if (req.session.usuarioLogueado != null) {
    next();
  } else {
    res.redirect("/login");
  }
}
module.exports = logueadoMiddleware;
