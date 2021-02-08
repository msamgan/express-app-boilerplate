const methods = require('../../helpers/methods')

exports.index = async (req, res) => {
    res.render('auth/login',
        {
            title: 'Login',
            helpers: {
                isPath: value => value === 'login'
            }
        }
    );
}

exports.indexPost = async (req, res) => {
    res.send(methods.successResponse(
        'Express JS API Boiler Plate post api working like a charm...',
        {
            data: 'here comes you payload...',
            request: req.body,
        }
    ))
}