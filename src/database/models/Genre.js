module.exports = (sequelize, DataTypes) => {
  let alias = "Genre";

  let cols = {
    genre_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    genre_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    genre_info: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    genre_path: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  };

  let config = {
    tableName: "genres",
    timestamps: true,
    underscored: true,
  };

  const Genre = sequelize.define(alias, cols, config);

  Genre.associate = function (models) {
    Genre.hasMany(models.Product, {
      as: "products",
      foreignKey: "genre_id",
    });
  };

  return Genre;
};
