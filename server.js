const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes/routes');
const app = express();

app.use(express.static('./src/static/'));
app.set('views','./src/views/templates/');
app.set('view engine','ejs');
app.use(bodyParser.json());
app.use('/', routes);

let server = app.listen(process.env.PORT || 3000, (error) => {console.log('Server started on port 3000');});