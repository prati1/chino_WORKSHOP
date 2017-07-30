var mongoose = require('mongoose');

//creating schema

var productSchema = mongoose.Schema({
	product_name: String,
	product_size: String,
	product_sample: String,
	product_quantity: Number, 
	email: String,
	contact: String,
	notes: String,
	total: Number,
	image: String,
});



var Product = module.exports = mongoose.model('Product', productSchema)

module.exports.getProfiles = function(callback,limit){
	User.find(callback).limit(limit);
}