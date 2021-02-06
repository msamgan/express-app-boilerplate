require('dotenv').config();
const express = require('express')
const expHbs = require('express-handlebars');

const app = express()
const port = process.env.PORT

app.use(express.json());
app.use('/public', express.static(__dirname + '/public'));

app.engine('handlebars', expHbs());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/resources/views');

console.log(`Node environment: ${process.env.NODE_ENV}`);
app.listen(port, () => {
    console.log(`Example app listening at port http://localhost:${port}`)
})

require('./routes/api')(app);
require('./routes/web')(app);
