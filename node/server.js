const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
const port = 3000;
const api = require('./server/routes/api')
app.use(morgan('dev'));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true,limit: '50mb'}));

mongoose.connect('mongodb://mongo:27017/exercice', { useNewUrlParser: true}).then(sucess => {
    app.use('/',api)
}).catch(erro => {
    console.log("Falha ao estabelecer conexão");
})

app.listen(port,() => {
    console.log('server on');
});