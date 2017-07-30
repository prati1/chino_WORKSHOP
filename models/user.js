var mongoose = require('mongoose');

//creating schema

var userSchema = mongoose.Schema({
	first_name: String,
	last_name: String,
	user_name: String,
	address: String, 
	phone_no: Number, 
	email_id: String,
});

var User = module.exports = mongoose.model('User',userSchema)

module.exports.getProfiles = function(callback,limit){
	User.find(callback).limit(limit);
}