const { Subjects } = require('../models/index.js');

exports.index = (req, res) => {
    Subjects.findAll({
        order: [
            ['subjectsId', 'DESC']
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
                'message': 'No records available'
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
    Subjects.findOne({
        where: {
            subjectsId: req.params.id
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

exports.store = (req, res) => {};

exports.edit = (req, res) => {};

exports.delete = (req, res) => {};

exports.destroy = (req, res) => {};