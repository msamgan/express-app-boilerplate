require('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT

app.use(express.json());
app.use('/public',express.static('public'));

app.set('views', __dirname + '/resources/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());



console.log(`Node environment: ${process.env.NODE_ENV}`);
app.listen(port, () => {
    console.log(`Example app listening at port http://localhost:${port}`)
})

require('./routes/api')(app);
require('./routes/web')(app);
