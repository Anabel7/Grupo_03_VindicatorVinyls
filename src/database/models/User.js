module.exports = (sequelize, DataTypes) => {
  let alias = "User";

  let cols = {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    user: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    avatar_path: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    rol: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
  };

  let config = {
    tableName: "users",
    timestamps: true,
    underscored: true,
  };

  const User = sequelize.define(alias, cols, config);

  User.associate = function (models) {
    User.belongsToMany(models.Product, {
      as: "products",
      through: "carrito",
      foreignKey: "user_id",
      otherKey: "product_id",
      timestamps: false,
    });
  };

  return User;
};
