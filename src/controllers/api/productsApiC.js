const db = require("../../database/models");
const Op = db.Sequelize.Op;

module.exports = {
  list: (req, res) => {
    db.Product.findAll({
      include: ["artist", "genre", "label"],
    })
      .then((discos) => {
        //cantidad total de productos en la base.
        const count = discos.length;
        //creamos el objeto para contar los productos por categoría
        const countByCategory = {};

 // Inicializar todas las categorías con un recuento de 0
        db.Genre.findAll().then((genres) => {
          genres.forEach((genre) => {
            countByCategory[genre.genre_name] = 0;
          });

        discos.forEach((product) => {
          let genero = product.genre.genre_name;
          countByCategory[genero]++;
        });
        //creamos el array para los detalles de los productos
        const products = discos.map((product) => {
          // let labels = [];
          // if (product.label_id && product.label.length > 0) {
          //   labels = product.label.map(
          //     (discografica) => discografica.label_name
          //   );
          // } else {
          //   labels = [product.label_name];
          // }
          return {
            id: product.product_id,
            name: product.product_title,
            description: product.product_info,
            labels: product.label.label_name,
            detail: `http://localhost:3001/api/products/${product.product_id}`,
          };
        });

        return res.status(200).json({
          count: count,
          countByCategory: countByCategory,
          products: products,
          status: 200,
        });
        });
      })
      .catch((error) => {
        console.error("Error al obtener productos:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
      });
  },
  show: (req, res) => {
    db.Product.findByPk(req.params.id, {
      include: ["artist", "genre", "label"],
    }).then((disco) => {
      if (!disco) {
        return res.status(404).json({ error: "Producto no encontrado" });
      }
      let dataProduct = {
        id: disco.product_id,
        product_title: disco.product_title,
        product_info: disco.product_info,
        price: disco.price,
        tracklist: disco.tracklist,
        stock: disco.stock,
        release_date: disco.release_date,
        cover_path: `http://localhost:3001/img/products/${disco.cover_path}`,
        artist: disco.artist.artist_name,
        genre: disco.genre.genre_name,
        labels:
          disco.label.length > 0
            ? disco.label.map((label) => label.label_name)
            : disco.label.label_name,
      };
      res.status(200).json({
        data: dataProduct,
        status: 200,
      });
    });
  },
  search: (req, res) => {
    db.Product.findAll({
      where: {
        product_title: { [Op.like]: "%" + req.query.keyword + "%" },
      },
    }).then((discos) => {
      return res.status(200).json(discos);
    });
    return res.status(200).json("No encontramos resultados");
  },
};
