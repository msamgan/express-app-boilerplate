const IndexController = require('../controllers/api/index.controller')

module.exports = function(app){
    /**
     * static URLS to be on top..
     */
    app.get('/api', IndexController.index)
    app.post('/api', IndexController.indexPost)
}