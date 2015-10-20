var mongoose = require('mongoose');

module.exports = function() {
console.log('Fomos criados!')

  var schema = mongoose.Schema({
    name: {
      type: String,
      required: true
    }
    ,email: {
      type: String,
      required: true,
    }
    ,text:{
      type:String,
      required: true
    }
    ,data_cad:{
    	type:Date
    		,default:Date.now
      }
    });

  return mongoose.model('Contact', schema);
};
