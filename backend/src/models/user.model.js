const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const User = sequelize.define( "User", {
            id_user: {
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
            email: {
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
    User.associate = function(models) {
        User.belongsToMany(models.Product, { foreignKey: 'user_id', through: 'acervouser', as: 'acervo'});
    }
    return User;
};