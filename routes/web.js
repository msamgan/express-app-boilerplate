const Index = require('../controllers/api/index')

module.exports = function(app){
    /**
     * static URLS to be on top..
     */
    app.get('/api/', Index.index)
    app.post('/api/', Index.indexPost)
}