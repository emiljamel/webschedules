const path = require('path');

/**
 * @requires module:npmjs.com/package/dotenv
 * @see https://www.npmjs.com/package/dotenv
 */
require('dotenv').config();

/**
 * @requires module:npmjs.com/package/express
 * @see https://www.npmjs.com/package/express
 * @see https://expressjs.com/en/starter/static-files.html
 */
const express = require('express');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));

/**
 * @requires module:npmjs.com/package/body-parser 
 * @see https://www.npmjs.com/package/body-parser
 */
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/**
 * @requires module:npmjs.com/package/express-handlebars
 * @see https://www.npmjs.com/package/express-handlebars
 */
const exphbs = require('express-handlebars');
app.engine('.hbs', exphbs({
    extname: '.hbs',
    layoutsDir: path.join(__dirname, '../views'),
    partialsDir: path.join(__dirname, 'views/partials'),
    defaultLayout: 'templates'
}));
app.set('view engine', 'hbs');

/**
 * @author Emil Jamel Mahmuda <memiljamel@gmail.com>
 * @version 1.0.0
 * @copyright Emil Jamel Mahmuda 2020
 */
const server = app.listen(process.env.APP_PORT || 3000, process.env.APP_HOST || '127.0.0.1', () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log(`Server listening at http://${host}:${port}`);
});

module.exports = app;