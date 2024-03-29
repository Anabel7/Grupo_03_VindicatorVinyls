const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const port = 3001;
//Requiero los paquetes para trabajar con session y cookies
const session = require("express-session");
const cookieParser = require("cookie-parser");

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: true }));

//Middleware de aplicación el cual se encargue de controlar la posibilidad de usar otros métodos diferentes al GET y al POST, en nuestros formularios como PUT - DELETE
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "Vinny",
    resave: false,
    saveUninitialized: false,
  })
);

//Middleware para activar lo referido a cookies
app.use(cookieParser());

const logMid = require("../middlewares/logueadoMiddleware");
const loglessMid = require("../middlewares/sinLoguearMiddleware");
const adminMiddleware = require('../middlewares/adminMiddleware')

//Requerir las rutas
const mainRoutes = require("./routes/mainRoutes");
const userRoutes = require("./routes/userRoutes");
const prodRoutes = require("./routes/prodRoutes");
const adminRoutes = require("./routes/adminRoutes");

app.use(express.static(path.resolve(__dirname, "../public")));
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));
app.use("/", mainRoutes);
app.use("/user", userRoutes);
app.use("/producto", prodRoutes);
app.use("/admin", adminRoutes);

//usuarios
//nelsopon13@gmail.com esotilin

app.use(logMid);
app.use(loglessMid);
app.use(adminMiddleware);

app.listen(port, () => {
  console.log("Servidor levantado en el puerto http://localhost:" + port);
});
