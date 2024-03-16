function logueadoMiddleware(req, res, next) {
  if (req.session.usuario != null) {
    next();
  } else {
    res.redirect("/user/login");
  }
}
module.exports = logueadoMiddleware;
