module.exports = (sequelize, DataTypes) => {
    let alias = "user";

    let cols = {
        "id": {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        "name": {
            type: DataTypes.STRING
        },
        "user": {
            type: DataTypes.STRING
        },
        "email": {
            type: DataTypes.STRING
        },
        "password": {
            type: DataTypes.STRING
        },
        "avatar_url": {
            type: DataTypes.STRING
        },
        "rol": {
            type: DataTypes.STRING
        }
    };

    let config = {
        tableName: "user",
        timestamps: false
    }

    const usuario = sequelize.define(alias, cols, config);

    return usuario;
}