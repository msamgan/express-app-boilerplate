const jwt = require('jsonwebtoken');

const methods = require('../../helpers/methods')
const Controller = require('../controller')

const {
    validateUser
} = require('../../data-access-layer/user')

class LoginController extends Controller {
    //
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
LoginController.index = async (req, res) => {
    res.render('auth/login',
        {
            title: 'Login',
            helpers: {
                isPath: value => value === 'login'
            }
        }
    );
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
LoginController.indexPost = async (req, res) => {
    let user = await validateUser(req.body);

    if(user) {
        let accessToken = jwt.sign({
            id: user.id,
            email: user.email
        }, process.env.JWT_SECRET, {
            expiresIn: '250h'
        });
    
        res.header('Authorization', 'Bearer '+ accessToken);
        res.cookie('accessToken', accessToken, { maxAge: 900000, httpOnly: true });
        res.json({
            accessToken
        });
    } else {
        res.send(methods.errorResponse("Invalid credentials"));
    }
}

module.exports = LoginController