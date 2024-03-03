module.exports = (sequelize, DataTypes) => {
    let alias = "Genre";

    let cols = {
        "genre_id": {
            type: DataTypes.SMALLINT.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        "genre_name": {
            type: DataTypes.STRING,
            allowNull: false
        },
        "genre_info": {
            type: DataTypes.STRING,
            allowNull: false
        }
    }

let config = {
    tableName: "genre",
    timestamps: true,
    underscored: true
}

const Genre = sequelize.define(alias, cols, config);

return Genre;
}