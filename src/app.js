const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const port = 3001;
const cors = require('cors');
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
//Middleware de CORS
app.use(cors({
  origin: 'http://localhost:5173', // Permitir solicitudes solo desde este origen (incluyendo el puerto)
  methods: ['GET', 'POST'], // Permitir solo estos métodos HTTP
  allowedHeaders: ['Content-Type', 'Authorization'], // Permitir solo estos encabezados
}));

//Middleware para activar lo referido a cookies
app.use(cookieParser());

const logMid = require("../middlewares/logueadoMiddleware");
const loglessMid = require("../middlewares/sinLoguearMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");

//Requerir las rutas
const mainRoutes = require("./routes/mainRoutes");
const userRoutes = require("./routes/userRoutes");
const prodRoutes = require("./routes/prodRoutes");
const adminRoutes = require("./routes/adminRoutes");

//api routes
const productsApiR = require("./routes/api/productsApiR");
const usersApiR = require("./routes/api/usersApiR");

app.use(express.static(path.resolve(__dirname, "../public")));
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));
app.use("/", mainRoutes);
app.use("/user", userRoutes);
app.use("/producto", prodRoutes);
app.use("/admin", adminRoutes);

//api use
app.use("/api/products", productsApiR);
app.use("/api/users", usersApiR);

//middlewares de sesiones
app.use(logMid);
app.use(loglessMid);
app.use(adminMiddleware);

app.listen(port, () => {
  console.log("Servidor levantado en el puerto http://localhost:" + port);
});
