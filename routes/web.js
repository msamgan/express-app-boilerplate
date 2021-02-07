const Index = require('../controllers/index')
const Login = require('../controllers/auth/login')
const Register = require('../controllers/auth/register')

module.exports = function(app){
    /**
     * static URLS to be on top..
     */
    app.get('/', Index.index)
    app.post('/', Index.indexPost)

    app.get('/login', Login.index)
    app.get('/register', Register.index)
}