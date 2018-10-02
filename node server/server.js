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

mongoose.connect('mongodb://localhost:27017/exercice', {useNewUrlParser: true});


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE,*');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,x-access-token,enctype,Accept,*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use('/',api)

app.listen(port,() => {
    console.log('server on');
});