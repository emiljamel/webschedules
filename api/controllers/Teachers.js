const { Teachers } = require('../models/index.js');

exports.index = (req, res) => {
    Teachers.findAll({
        order: [
            ['teachersId', 'DESC']
        ]
    }).then(results => {
        if (results.length > 0) {
            res.status(200).json({
                'error': false,
                'status': 200,
                'data': results
            });
    
            res.end();
        } else {
            res.status(200).json({
                'error': false,
                'status': 200,
                'message': 'No records avaiable'
            });
    
            res.end();
        }
    }).catch(err => {
        res.status(500).json({
            'error': true,
            'status': 500,
            'message': 'Internal Server Error'
        });

        res.end();
    });
};

exports.show = (req, res) => {
    Teachers.findOne({
        where: {
            teachersId: req.params.id
        }
    }).then(results => {
        if (results) {
            res.status(200).json({
                'error': false,
                'status': 200,
                'data': results
            });

            res.end();
        } else {
            res.status(404).json({
                'error': true,
                'status': 404,
                'message': 'id Not Found'
            });

            res.end();
        }
    }).catch(err => {
        res.status(500).json({
            'error': true,
            'status': 500,
            'message': 'Internal Server Error'
        });

        res.end();
    });
};

exports.store = (req, res) => {
    if (Object.keys(req.body).length > 0) {
        Teachers.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
            avatar: req.body.avatar,
            createdAt: new Date(),
            updatedAt: new Date()
        }).then(results => {
            res.status(200).json({
                'error': false,
                'status': 200,
                'message': 'New record has been created'
            });

            res.end();
        }).catch(err => {
            res.status(500).json({
                'error': true,
                'status': 500,
                'message': 'Internal Server Error'
            });

            res.end();
        });
    } else {
        res.status(400).json({
            'error': true,
            'status': 400,
            'message': 'Bad Request'
        });

        res.end();   
    }
};

exports.edit = (req, res) => {
    if (Object.keys(req.body).length > 0) {
        Teachers.update({
            name: req.body.name,
            password: req.body.password,
            avatar: req.body.avatar,
            updatedAt: new Date()
        }, {
            where: {
                teachersId: req.params.id
            }
        }).then(results => {
            if (results > 0) {
                res.status(200).json({
                    'error': false,
                    'status': 200,
                    'message': 'A records has been updated'
                });
    
                res.end();
            } else {
                res.status(404).json({
                    'error': true,
                    'status': 404,
                    'message': 'id Not Found'
                });
    
                res.end();
            }
        }).catch(err => {
            res.status(500).json({
                'error': true,
                'status': 500,
                'message': 'Internal Server Error'
            });

            res.end();
        });
    } else {
        res.status(400).json({
            'error': true,
            'status': 400,
            'message': 'Bad Request'
        });

        res.end();
    }
};

exports.delete = (req, res) => {
    Teachers.destroy({
        where: {
            teachersId: req.params.id
        }
    }).then(results => {
        if (results > 0) {
            res.status(200).json({
                'error': false,
                'status': 200,
                'messages': 'A records has been deleted'
            });

            res.end();
        } else {
            res.status(404).json({
                'error': true,
                'status': 404,
                'message': 'id Not Found'
            });

            res.end();
        }
    }).catch(err => {
        res.status(500).json({
            'error': true,
            'status': 500,
            'message': 'Internal Server Error'
        });

        res.end();
    });
};

exports.destroy = (req, res) => {
    Teachers.destroy({
        truncate: {
            cascade: true
        }
    }).then(results => {
        res.status(200).json({
            'error': false,
            'status': 200,
            'messages': 'All records has been deleted'
        });

        res.end();
    }).catch(err => {
        res.status(500).json({
            'error': true,
            'status': 500,
            'message': 'Internal Server Error'
        });

        res.end();
    });
};