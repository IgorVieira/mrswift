module.exports =  function(){
	var controller = {};

	controller.index = function(req,res){
		res.render('home/index.jade');
	}


	return controller;
}
