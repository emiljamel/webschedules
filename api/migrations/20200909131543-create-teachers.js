module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Teachers', {
            teachersId: {
                type: Sequelize.BIGINT(20),
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING(70),
                allowNull: false
            },
            email: {
                type: Sequelize.STRING(150),
                unique: true,
                allowNull: false
            },
            password: {
                type: Sequelize.STRING(255),
                allowNull: false
            },
            role: {
                type: Sequelize.INTEGER(4),
                defaultValue: 2,
                allowNull: false
            },
            avatar: {
                type: Sequelize.STRING(150),
                allowNull: true,
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Teachers');
    }
};