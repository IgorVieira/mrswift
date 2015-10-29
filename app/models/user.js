var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


module.exports = function(){
	var Schema =  mongoose.Schema;
	var ObjectId = Schema.ObjectId;


	var schema = mongoose.Schema({
		id:ObjectId,
		firstName:String,
		lastName:String,
		email:{
				type:String
				, unique:true
		}
		,password:String
		// ,data_cad:{
		// 	type:Date
		// 	, default:Date.now
		// }

	});


	return mongoose.model('User', schema);


}