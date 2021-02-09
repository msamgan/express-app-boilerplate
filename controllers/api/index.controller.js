const methods = require('../../helpers/methods')
const Controller = require('../controller')

class IndexController extends Controller {
    //
}

IndexController.index = async (req, res) => {
    res.send(methods.successResponse(
        'Express JS API Boiler Plate working like a charm...',
        {
            data: 'here comes you payload...'
        }
    ))
}

IndexController.indexPost = async (req, res) => {
    res.send(methods.successResponse(
        'Express JS API Boiler Plate post api working like a charm...',
        {
            data: 'here comes you payload...',
            request: req.body,
        }
    ))
}

module.exports = IndexController