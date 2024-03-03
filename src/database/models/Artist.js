module.exports = (sequelize, DataTypes) => {
    let alias = "Artist";

    let cols = {
        "artist_id": {
            type: DataTypes.SMALLINT.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        "artist_name": {
            type: DataTypes.STRING,
            allowNull: false
        },
        "artist_info": {
            type: DataTypes.STRING,
            allowNull: false
        }
    }

let config = {
    tableName: "artist",
    timestamps: true,
    underscored: true
}

const Artist = sequelize.define(alias, cols, config);

Artist.associate = function (models) {
    Artist.hasMany(models.Products, {
        as: "discos",
        foreignKey: "artist_id"
    })
}

return Artist;
}