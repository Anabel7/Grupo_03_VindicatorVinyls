const express = require('express');
const app = express();
const path=require('path')
const mainRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/userRoutes');
const prodRoutes = require('./routes/prodRoutes');

app.use(express.static(path.resolve(__dirname, '../public')));
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'))
app.use('/', mainRoutes);
app.use('/user', userRoutes);
app.use('/prod', prodRoutes);

app.listen(3001, () => {
  console.log('Servidor 3001 funcionando')
});