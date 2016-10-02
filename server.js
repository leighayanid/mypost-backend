var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Message = mongoose.model('Message', {
    msg: String
}); //uppercase meaning this is something needs to instantiate

app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

//get
app.get('/api/message', GetMessages);

//creat a post method
app.post('/api/message', function (req, res) {
    console.log(req.body);
    var message = new Message(req.body);
    message.save();
    res.status(200);
})

//post method for authentication
app.post('/auth/register', function(req,res){
    console.log(req.body)
});

//function to retrieve all the post/messages
function GetMessages(req, res){
    //passing empty param
    Message.find({}).exec(function(err,result){
        res.send(result);
    });
}

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
