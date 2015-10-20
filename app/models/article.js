var mongoose = require('mongoose');
module.exports = function(){

  var schema = mongoose.Schema({
    title: {
      type: String,
      required: true
    }
    ,text: {
      type: String,
      required: true,
    }
    ,author:{
      type:String,
      required: true
    }
    ,description:{
      type:String,
      require:true
    }
    ,data:{
    	type:Date
    		,default:Date.now
      }
    });

  return mongoose.model('Article', schema);

}
