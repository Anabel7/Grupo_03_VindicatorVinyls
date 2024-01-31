module.exports = (sequelize, DataTypes) => {
    let alias = "Usuarios";

    let cols = {
        "id": {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        "nombre": {
            type: DataTypes.STRING
        },
        "usuario": {
            type: DataTypes.STRING
        },
        "email": {
            type: DataTypes.STRING
        },
        "password": {
            type: DataTypes.STRING
        },
        "avatar": {
            type: DataTypes.STRING
        },
        "rol": {
            type: DataTypes.STRING
        }
    };

    let config = {
        tableName: "users",
        timestamps: false
    }

    const Usuario = sequelize.define(alias, cols, config);

    return Usuario
}