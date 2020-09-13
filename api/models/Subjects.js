const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Subjects extends Model {
        static associate(models) {
            this.belongsTo(models.Teachers, {
                foreignKey: 'teachersId'
            });
        }
    };

    Subjects.init({
        subjectsId: {
            type: DataTypes.BIGINT(20),
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        subjects: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        class: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        hours: {
            type: DataTypes.INTEGER(4),
            allowNull: false
        },
        majors: {
            type: DataTypes.STRING(70),
            allowNull: false
        },
        rooms: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        days: {
            type: DataTypes.STRING(30),
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
        modelName: 'Subjects'
    });

    return Subjects;
};