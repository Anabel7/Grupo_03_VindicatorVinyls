const express = require('express');
const app = express();
const path=require('path')
const methodOverride = require('method-override');

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));

//Middleware de aplicación el cual se encargue de controlar la posibilidad de usar otros métodos diferentes al GET y al POST, en nuestros formularios como PUT - DELETE
app.use(methodOverride('_method'));

//Requerir las rutas
const mainRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/userRoutes');
const prodRoutes = require('./routes/prodRoutes');
const adminRoutes = require('./routes/adminRoutes');

app.use(express.static(path.resolve(__dirname, '../public')));
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'))
app.use('/', mainRoutes);
app.use('/user', userRoutes);
app.use('/producto', prodRoutes);
app.use('/admin', adminRoutes);


app.listen(3001, () => {
  console.log('Servidor 3001 funcionando')
});

