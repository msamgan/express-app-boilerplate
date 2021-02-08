const methods = require('../../helpers/methods')
const {sequelize, DataTypes} = require('../../config/connection')
const User = (require('../../models/user')(sequelize, DataTypes))

const bcrypt = require('bcrypt');
const salt = 10

exports.index = async (req, res) => {
    res.render('auth/register', {
        title: 'Register',
        helpers: {
            isPath: value => value === 'register'
        }
    });
}

exports.indexPost = async (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, salt);
    const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })

    res.redirect('/login');
}