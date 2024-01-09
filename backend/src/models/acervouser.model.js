const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const AcervoUser = sequelize.define( "AcervoUser", {
            id_acervouser: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER(11),
            },
            user_id: {
                allowNull: false,
                type: DataTypes.INTEGER(11),
                references: { model: 'users', key: 'id_user' },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            acervo_id: {
                allowNull: false,
                type: DataTypes.INTEGER(11),
                references: { model: 'products', key: 'id_acervo' },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            nome_disco: {
                allowNull: false,
                type: DataTypes.STRING(255),
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            nome_artista: {
                allowNull: false,
                type: DataTypes.STRING(255),
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            foto: {
                allowNull: false,
                type: DataTypes.STRING(255),
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            }
        },
        {
            timestamps: false,
        }
    );
    return AcervoUser
};