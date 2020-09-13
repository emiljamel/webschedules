const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Teachers extends Model {
        static associate(models) {
            this.hasOne(models.Degree, {
                foreignKey: 'teachersId'
            });

            this.hasMany(models.Subjects, {
                foreignKey: 'teachersId'
            });
        }
    };

    Teachers.init({
        teachersId: {
            type: DataTypes.BIGINT(20),
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(70),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(150),
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        role: {
            type: DataTypes.INTEGER(4),
            defaultValue: 2,
            allowNull: false
        },
        avatar: {
            type: DataTypes.STRING(150),
            allowNull: true,
        }
    }, {
        sequelize,
        modelName: 'Teachers'
    });

    return Teachers;
};