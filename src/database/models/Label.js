module.exports = (sequelize, DataTypes) => {
    let alias = "Label";

    let cols = {
        "label_id": {
            type: DataTypes.TINYINT.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        "label_name": {
            type: DataTypes.STRING,
            allowNull: false
        },
        "label_info": {
            type: DataTypes.STRING,
            allowNull: false
        }
    }

let config = {
    tableName: "label",
    timestamps: true,
    underscored: true
}

const Label = sequelize.define(alias, cols, config);

return Label;
}