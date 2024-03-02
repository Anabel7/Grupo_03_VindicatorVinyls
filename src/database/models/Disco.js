module.exports = (sequelize, DataTypes) => {
    let alias = "product";

    let cols = {
        "product_id": {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        "product_title": {
            type: DataTypes.STRING
        },
        "artist_id": {
            type: DataTypes.TINYSTRING
        },
        "product_info": {
            type: DataTypes.MEDIUMTEXT
        },
        "price": {
            type: DataTypes.FLOAT
        },
        "genre_id": {
            type: DataTypes.TINYSTRING
        },
        "stock": {
            type: DataTypes.SMALLINT
        },
        "anio": {
            type: DataTypes.DATE
        },
        "imagen": {
            type: DataTypes.STRING
        },
        "tracklist": {
            type: DataTypes.STRING
        },
        "label_id": {
            type: DataTypes.STRING
        }
    }

let config = {
    tableName: "product",
    timestamps: false
}

const Disco = sequelize.define(alias, cols, config);

return Disco
}