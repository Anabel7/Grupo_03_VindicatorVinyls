module.exports = (sequelize, dataTypes) => {
    let alias = "Artistas";
    let cols = {
        artist_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        artist_name: {
            type: dataTypes.STRING
        },
        artist_info: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: artist,
        timestamps: false
    }

    const Artista = sequelize.define(alias, cols, config);

    Artista.associate = function (models) {
        Artista.hasMany(models.Discos, {
            as: "discos",
            foreignKey: "artist_id"
        })
    }

    return Artista;
}