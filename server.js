var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var index = require('./routes/index');

var port = 3000;

var app = express();
mongoose.connect('localhost:27017/eggs');

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE');
    next();
});


app.use('/', index);

app.listen(port, "127.0.0.1");
console.log('Server started on port '+port);