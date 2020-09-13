const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Degree extends Model {
        static associate(models) {
            this.belongsTo(models.Teachers, {
                foreignKey: 'teachersId'
            });
        }
    };

    Degree.init({
        degreeId: {
            type: DataTypes.BIGINT(20),
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        degree: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        teachersId: {
            type: DataTypes.BIGINT(20),
            references: {
                model: 'Teachers',
                key: 'teachersId'
            },
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Degree'
    });

    return Degree;
};