const methods = require('../../helpers/methods')
const Controller = require('../controller')
const {sequelize, DataTypes} = require('../../config/connection')
const User = (require('../../models/user')(sequelize, DataTypes))

const bcrypt = require('bcrypt');
const salt = 10

const {validationResult} = require('express-validator');

class RegisterController extends Controller {
    //
}

RegisterController.index = async (req, res) => {
    res.render('auth/register', {
        title: 'Register',
        helpers: {
            isPath: value => value === 'register'
        }
    });
}

RegisterController.indexPost = async (req, res) => {
    /*const errors = validationResult(req);
    console.log(errors)
    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()});
    }*/

    req.body.password = bcrypt.hashSync(req.body.password, salt);
    const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })

    res.redirect('/login');
}

module.exports = RegisterController