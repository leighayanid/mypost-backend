var mongoose = require('mongoose');

//create message model for mongoose
module.exports = mongoose.model('Message', {
    msg: String
}); //uppercase meaning this is something needs to instantiate
