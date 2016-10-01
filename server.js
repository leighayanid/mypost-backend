var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

//create an endpoint for message post
app.post('/api/message', function(req,res){
    console.log(req.body);
    res.status(200);
});

//set up a server
var server = app.listen(5000, function(){
   console.log('Listening on port', server.address().port);
});
