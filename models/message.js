var mongoose = require('mongoose');

//create message model for mongoose
module.exports = mongoose.model('Message', {
    msg: String,
    user: {type: mongoose.Schema.ObjectId, ref: 'User'} //associate the user id with the message
});
