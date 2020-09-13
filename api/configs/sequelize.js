/**
 * @requires module:npmjs.com/package/dotenv
 * @see https://www.npmjs.com/package/dotenv
 */
require('dotenv').config();

/**
 * @see https://sequelize.org/master/index.html
 */
module.exports = {
    development: {
        username: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_DATABASE || 'forge',
        host: process.env.DB_HOST || '127.0.0.1',
        port: process.env.DB_PORT || 3306,
        dialect: process.env.DB_CONNECTION || 'mysql',
        define: {
            freezeTableName: true
        }
    },
    test: {
        username: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_DATABASE || 'forge',
        host: process.env.DB_HOST || '127.0.0.1',
        port: process.env.DB_PORT || 3306,
        dialect: process.env.DB_CONNECTION || 'mysql',
        define: {
            freezeTableName: true
        }
    },
    production: {
        username: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_DATABASE || 'forge',
        host: process.env.DB_HOST || '127.0.0.1',
        port: process.env.DB_PORT || 3306,
        dialect: process.env.DB_CONNECTION || 'mysql',
        define: {
            freezeTableName: true
        }
    }
};