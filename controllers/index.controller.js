const methods = require('../helpers/methods')
const Controller = require('./controller')

class IndexController extends Controller {
    //
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
IndexController.index = async (req, res) => {
    res.render('index', {
        title: 'Home',
        helpers: {
            isPath: value => value === 'home'
        }
    });
}

module.exports = IndexController