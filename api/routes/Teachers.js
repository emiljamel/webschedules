const Teachers = require('../controllers/Teachers.js');

module.exports = app => {
    app.route('/api/v1/teachers')
        .get(Teachers.index);
    
    app.route('/api/v1/teachers/:id')
        .get(Teachers.show);
    
    app.route('/api/v1/teachers')
        .post(Teachers.store);

    app.route('/api/v1/teachers/:id')
        .put(Teachers.edit);
    
    app.route('/api/v1/teachers/:id')
        .delete(Teachers.delete);
    
    app.route('/api/v1/teachers')
        .delete(Teachers.destroy);
};