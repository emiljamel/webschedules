const Subjects = require('../controllers/Subjects.js');

module.exports = app => {
    app.route('/api/v1/subjects')
        .get(Subjects.index);
    
    app.route('/api/v1/subjects/:id')
        .get(Subjects.show);
    
    app.route('/api/v1/subjects')
        .post(Subjects.store);

    app.route('/api/v1/subjects/:id')
        .put(Subjects.edit);
    
    app.route('/api/v1/subjects/:id')
        .delete(Subjects.delete);
    
    app.route('/api/v1/subjects')
        .delete(Subjects.destroy);
};