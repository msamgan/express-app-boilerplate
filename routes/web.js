const Index = require('../controllers/index.controller')
const LoginController = require('../controllers/auth/login.controller')
const RegisterController = require('../controllers/auth/register.controller')
const validators = require('../controllers/validators')

module.exports = function(app){
    /**
     * static URLS to be on top..
     */
    app.get('/', Index.index)

    app.get('/login', LoginController.index)
    app.post('/login', LoginController.indexPost)

    app.get('/register', RegisterController.index)
    app.post('/register', RegisterController.indexPost)
}