const { check } = require('express-validator');

exports.register = [
    check('email').isEmail().isLength(1)
        .withMessage('must be at least 5 chars long')
    ,
    check('name').isString().isLength(3)
        .withMessage('name is required')
    ,
    check('password').isString().isLength(3),
];
