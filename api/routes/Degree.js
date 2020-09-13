const Degree = require('../controllers/Degree.js');

module.exports = app => {
    app.route('/api/v1/degree')
        .get(Degree.index);
    
    app.route('/api/v1/degree/:id')
        .get(Degree.show);
    
    app.route('/api/v1/degree')
        .post(Degree.store);

    app.route('/api/v1/degree/:id')
        .put(Degree.edit);
    
    app.route('/api/v1/degree/:id')
        .delete(Degree.delete);
    
    app.route('/api/v1/degree')
        .delete(Degree.destroy);
};