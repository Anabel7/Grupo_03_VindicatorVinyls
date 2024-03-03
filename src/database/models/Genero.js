module.exports = (sequelize, dataTypes) => {
    let alias = "Generos";
    let cols = {
        genre_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        genre_name: {
            type: dataTypes.STRING
        },
        genre_info: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: genre,
        timestamps: false
    }

    const Genero = sequelize.define(alias, cols, config);

    Genero.associate = function (models) {
        Genero.hasMany(models.Discos, {
            as: "discos",
            foreignKey: "genre_id"
        })
    }

    return Genero;
}