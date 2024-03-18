const adminMiddleware = (req, res, next) => {
  // console.log('adminmiddleware', req.session.usuario);
  if (!req.session.usuario || req.session.usuario.rol !== 'admin') {
      return res.redirect('/login');
  } else {
    next();
  }
};

module.exports = adminMiddleware;