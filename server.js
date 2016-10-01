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

//creat a post method
app.post('/api/message', function (req, res) {
    console.log(req.body);
    var message = new Message(req.body);
    message.save();
    res.status(200);
})

//function to retrieve all the post/messages
function GetMessages(){
    //passing empty param
    Message.find({}).exec(function(err,result){
        console.log(result);
    });
}

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/mypost', function (err, db) {
    if (!err) {
        console.log("connected to mongodb");
        GetMessages();
    }
})

//create  a server
var server = app.listen(5000, function () {
    console.log("Listening on port", server.address().port);
})
