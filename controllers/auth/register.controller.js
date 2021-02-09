const methods = require('../../helpers/methods')
const Controller = require('../controller')
const User = methods.loadModel('user')

const bcrypt = require('bcrypt');
const salt = 10

class RegisterController extends Controller {
    //
}

/**
 * render registration form
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
RegisterController.index = async (req, res) => {
    res.render('auth/register', {
        title: 'Register',
        helpers: {
            isPath: value => value === 'register'
        }
    });
}

/**
 * store registration user.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
RegisterController.indexPost = async (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, salt);
    const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })

    res.redirect('/login');
}

/**
 *
 * @type {RegisterController}
 */
module.exports = RegisterController