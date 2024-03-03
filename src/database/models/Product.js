module.exports = (sequelize, DataTypes) => {
    let alias = "Product";

    let cols = {
        "product_id": {
            type: DataTypes.SMALLINT.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        "artist_id": {
            type: DataTypes.SMALLINT.UNSIGNED,
            allowNull: false
        },
        "genre_id": {
            type: DataTypes.SMALLINT.UNSIGNED,
            allowNull: false
        },
        "product_title": {
            type: DataTypes.STRING,
            allowNull: false
        },
        "product_info": {
            type: DataTypes.TEXT,
            allowNull: false
        },
        "price": {
            type: DataTypes.DECIMAL(10,2).UNSIGNED,
            allowNull: false
        },
        "tracklist": {
            type: DataTypes.STRING,
            allowNull: false
        },
        "stock": {
            type: DataTypes.TINYINT.UNSIGNED,
            allowNull: false
        },
        "anio": {
            type: DataTypes.DATE,
            allowNull: false
        },
        "imagen": {
            type: DataTypes.STRING
        },
        "label_id": {
            type: DataTypes.TINYINT.UNSIGNED,
            allowNull: false
        }
    }

let config = {
    tableName: "product",
    timestamps: true,
    underscored: true
}

const Product = sequelize.define(alias, cols, config);

return Product
}