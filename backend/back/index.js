const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use(require('./routes/index'));

app.listen(4000);
console.log('Server on');