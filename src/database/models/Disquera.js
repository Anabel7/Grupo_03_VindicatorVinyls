module.exports = (sequelize, dataTypes) => {
    let alias = "Disqueras";
    let cols = {
        label_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        label_name: {
            type: dataTypes.STRING
        },
        label_info: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: label,
        timestamps: false
    }

    const Disquera = sequelize.define(alias, cols, config);

    Disquera.associate = function (models) {
        Disquera.hasMany(models.Disqueras, {
            as: "disqueras",
            foreignKey: "label_id"
        })
    }

    return Disquera;
}