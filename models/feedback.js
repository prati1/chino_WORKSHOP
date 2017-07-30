var mongoose = require('mongoose');

//creating schema

var feedbackSchema = mongoose.Schema({
	user_name: String,
	user_email: String,
	user_message: String
});



var Feedback = module.exports = mongoose.model('Feedback', feedbackSchema)

module.exports.getProfiles = function(callback,limit){
	User.find(callback).limit(limit);
}