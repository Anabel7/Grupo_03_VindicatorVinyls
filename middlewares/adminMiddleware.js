const adminMiddleware = (req, res, next) => {
  if (!req.session.usuario.rol || req.session.usuario.rol !== 'admin') {
      return res.redirect('/login');
  } else {
    next();
  }
};

module.exports = adminMiddleware;