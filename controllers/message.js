var Message = require('../models/message');

module.exports = {
    //function to retrieve all the post/messages
    get: function(req, res) {
        //passing empty param
        Message.find({}).exec(function (err, result) {
            res.send(result);
        });
    },

    post: function(req, res) {
        console.log(req.body, req.user);
        req.body.user = req.user;
        var message = new Message(req.body);
        message.save();
        res.status(200);
    }
}
