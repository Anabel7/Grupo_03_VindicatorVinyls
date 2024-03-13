module.exports = (sequelize, DataTypes) => {
  let alias = "Label";

  let cols = {
    label_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    label_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    label_info: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    label_path: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  };

  let config = {
    tableName: "labels",
    timestamps: true,
    underscored: true,
  };

  const Label = sequelize.define(alias, cols, config);

  Label.associate = function (models) {
    Label.belongsToMany(models.Product, {
      as: "products",
      through: "label-products",
      foreignKey: "label_id",
      otherKey: "user_id",
      timestamps: true
    });
  };

  return Label;
};
