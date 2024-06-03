function logueadoMiddleware(req, res, next) {
  if (req.session.usuario != null) {
    res.locals.globalData = {
      user: req.session.usuario
    }
    next();
  } else {
    res.redirect("/user/login");
  }
}
module.exports = logueadoMiddleware;
