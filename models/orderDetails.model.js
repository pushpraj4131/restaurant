var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var orderSchema = new Schema({
	accountCode: {
		type: Number,
		required: true
		
	},
	payvalue: {
		type: String,
		required: true
	},
	timeToCookFood: {
		type: String,
	},
	userId : {
		type: Schema.Types.ObjectId, 
		ref: 'user', 
		required: true
	},
	foodId: [{
		type: Schema.Types.ObjectId, 
		ref: 'food', 
		required: true	
	}]
});
module.exports = mongoose.model('order' , orderSchema);