module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Subjects', {
            subjectsId: {
                type: Sequelize.BIGINT(20),
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            subjects: {
                type: Sequelize.STRING(150),
                allowNull: false
            },
            class: {
                type: Sequelize.STRING(20),
                allowNull: false
            },
            hours: {
                type: Sequelize.INTEGER(4),
                allowNull: false
            },
            majors: {
                type: Sequelize.STRING(70),
                allowNull: false
            },
            rooms: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            days: {
                type: Sequelize.STRING(30),
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
        await queryInterface.dropTable('Subjects');
    }
};