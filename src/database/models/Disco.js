module.exports = (sequelize, DataTypes) => {
    let alias = "Discos";

    let cols = {
        "id": {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        "disco": {
            type: DataTypes.STRING
        },
        "artista": {
            type: DataTypes.TINYSTRING
        },
        "descripcion": {
            type: DataTypes.MEDIUMTEXT
        },
        "precio": {
            type: DataTypes.FLOAT
        },
        "genero": {
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
        "discografica": {
            type: DataTypes.STRING
        }
    }

let config = {
    tableName: "vynils",
    timestamps: false
}

const Disco = sequelize.define(alias, cols, config);

Disco.associate = function(models){
    Disco.belongsTo(models.Generos,{
        as: "genero",
        foreignKey: "genre_id"
    })
}

Disco.associate = function(models){
    Disco.belongsTo(models.Artistas,{
        as: "artista",
        foreignKey: "artist_id"
    })
}

Disco.associate = function(models){
    Disco.belongsTo(models.Disqueras,{
        as: "disquera",
        foreignKey: "label_id"
    })
}

return Disco
}