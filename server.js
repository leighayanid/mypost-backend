var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var auth = require('./controllers/auth');
var message = require('./controllers/message');
var checkIfAuthenticated = require('./services/checkIfAuthenticated');
var cors = require('./services/cors');

//MIDDLEWARE
app.use(bodyParser.json());
app.use(cors.cors);

//REQUESTS
//get
app.get('/api/message', message.get);

//creat a post method
app.post('/api/message', checkIfAuthenticated.check, message.post);

//post method for authentication
app.post('/auth/register', auth.register);

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/mypost', function (err, db) {
    if (!err) {
        console.log("connected to mongodb");
    }
})

//create  a server
var server = app.listen(5000, function () {
    console.log("Listening on port", server.address().port);
})
