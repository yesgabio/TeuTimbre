const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Products = sequelize.define(
        "Product",
        {
            id_acervo: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER(11),
            },
            nome_disco: {
                allowNull: false,
                type: DataTypes.STRING(255),
            },
            nome_artista: {
                allowNull: false,
                type: DataTypes.STRING(255),
            },
            foto: {
                allowNull: false,
                type: DataTypes.STRING(255),
            },
        },
        {
            timestamps: false,
        }
    );
    Products.associate = function(models) {
        Products.belongsToMany(models.Users, { foreignKey: 'acervo_id', through: 'AcervoUser', as: 'acervo'});
}
return Products
};
