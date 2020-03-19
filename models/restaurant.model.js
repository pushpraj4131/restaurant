var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var restaurantSchema = new Schema({
	restaurantName: {
		type: String,
	},
	email: {
		type: String,
		
	},
	password: {
		type: String
	},
	address:{
		type: String, 
	},
	rating: {
		type: String,
	},
	contactNo : {
		type: String
	},
	userRole: {
		type: String,
		default: 'shop'
	}

});
module.exports = mongoose.model('restaurant' , restaurantSchema);