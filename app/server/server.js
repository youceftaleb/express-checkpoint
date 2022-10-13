const express = require('express');
const app = express();
const cors = require('cors');
const apiRoutes = require('./route');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());


app.use('/', apiRoutes());
app.listen(4000, () => console.log('app listening'));