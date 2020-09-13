const app = require('./configs/express.js');

/**
 * @param {Object} app
 */

require('./routes/Teachers.js')(app);
require('./routes/Degree.js')(app);
require('./routes/Subjects.js')(app);