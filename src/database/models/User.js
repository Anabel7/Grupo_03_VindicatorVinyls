module.exports = (sequelize, DataTypes) => {
    let alias = "User";

    let cols = {
        "id": {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        "name": {
            type: DataTypes.STRING,
            allowNull: false
        },
        "user": {
            type: DataTypes.STRING,
            allowNull: false
        },
        "email": {
            type: DataTypes.STRING,
            allowNull: false
        },
        "password": {
            type: DataTypes.STRING,
            allowNull: false
        },
        "avatar_url": {
            type: DataTypes.STRING,
            allowNull: false
        },
        "rol": {
            type: DataTypes.STRING,
            allowNull: false
        }
    };

    let config = {
        tableName: "user",
        timestamps: false,
        underscored: true
    }

    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        User.belongsToMany(models.Products, {
            as: "discos",
            through: "carrito",
            foreignKey: "user_id",
            otherKey: "product_id",
            timestamps: false
        })
    }

    return User;
}