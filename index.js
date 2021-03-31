require('dotenv').config();

const express = require('express')
const expHbs = require('express-handlebars');
var cookieParser = require('cookie-parser');

const uglifyCss = require('./helpers/uglifycss');
const errorMiddleware = require('./middleware/error.middleware');
const authMiddleware = require('./middleware/auth.middleware');

const app = express()
const port = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use('/public', express.static(__dirname + '/public'));

// Cookie parser middleware
app.use(cookieParser());

/**
 * Templating Engine and views configurations
 */
app.engine('handlebars', expHbs());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/resources/views');

/**
 * compressing all the css files...
 */
uglifyCss.compress()


/**
 * server config.
 */
console.log(`Node environment: ${process.env.NODE_ENV}`);
app.listen(port, () => {
    console.log(`Example app listening at port http://localhost:${port}`)
})


/**
 * Routes..
 */
require('./routes/api')(app, authMiddleware);
require('./routes/web')(app, authMiddleware);

// Error Handler middleware
app.use(errorMiddleware);