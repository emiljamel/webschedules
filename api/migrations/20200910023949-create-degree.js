module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Degree', {
            degreeId: {
                type: Sequelize.BIGINT(20),
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            degree: {
                type: Sequelize.STRING(20),
                allowNull: false
            },
            teachersId: {
                type: Sequelize.BIGINT(20),
                references: {
                    model: 'Teachers',
                    key: 'teachersId'
                },
                allowNull: false
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
        await queryInterface.dropTable('Degree');
    }
};