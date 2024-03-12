module.exports = (sequelize, DataTypes) => {
  let alias = "Product";

  let cols = {
    product_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    artist_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    genre_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    product_title: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    product_info: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2).UNSIGNED,
      allowNull: false,
    },
    tracklist: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    release_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    label_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    cover_path: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  };

  let config = {
    tableName: "products",
    timestamps: true,
    underscored: true,
  };

  const Product = sequelize.define(alias, cols, config);

  Product.associate = function (models) {
    Product.belongsTo(models.Genre, {
      as: "genre",
      foreignKey: "genre_id",
    });

    Product.belongsTo(models.Artist, {
      as: "artist",
      foreignKey: "artist_id",
    });

    Product.belongsTo(models.Label, {
      as: "label",
      foreignKey: "label_id",
    });

    Product.belongsToMany(models.User, {
      as: "user",
      through: "carrito",
      foreignKey: "product_id",
      otherKey: "user_id",
      timestamps: true,
    });
  };

  return Product;
};
