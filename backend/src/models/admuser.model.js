const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const AdmUser = sequelize.define( "AdmUser", {
            id_adm: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER(11),
            },
            nome: {
                allowNull: false,
                type: DataTypes.STRING(255),
            },
            sobrenome: {
                allowNull: false,
                type: DataTypes.STRING(255),
            },
            matricula: {
                allowNull: false,
                type: DataTypes.STRING(255),
                unique: true,
            },
            senha: {
                allowNull: false,
                type: DataTypes.STRING(255),
            },
        },
        {
            timestamps: false,
        }
    );
    return AdmUser;
};