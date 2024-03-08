module.exports = (sequelize, DataTypes) => {
  let alias = "Artist";

  let cols = {
    artist_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    artist_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    artist_info: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    artist_path: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  };

  let config = {
    tableName: "artists",
    timestamps: true,
    underscored: true,
  };

  const Artist = sequelize.define(alias, cols, config);

  Artist.associate = function (models) {
    Artist.hasMany(models.Product, {
      as: "products",
      foreignKey: "artist_id",
    });
  };

  return Artist;
};
