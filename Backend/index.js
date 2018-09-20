var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

var userRoute = require('./routes/user');
var app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/users',userRoute);
app.set('port',8080); // Comment for heroku
var server = app.listen(app.get('port'), function () {
    console.log('Techfesia Server running on port ' + server.address().port);
});