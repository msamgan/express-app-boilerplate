require('dotenv').config();

const express = require('express')
const expHbs = require('express-handlebars');
const uglifyCss = require('./helpers/uglifycss');

const app = express()
const port = process.env.PORT

app.use(express.json());
app.use('/public', express.static(__dirname + '/public'));

app.engine('handlebars', expHbs());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/resources/views');

uglifyCss.compress()

console.log(`Node environment: ${process.env.NODE_ENV}`);
app.listen(port, () => {
    console.log(`Example app listening at port http://localhost:${port}`)
})

require('./routes/api')(app);
require('./routes/web')(app);
