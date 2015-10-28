module.exports =  function(){
	var controller = {};

	controller.register = function(req,res){
		res.render('admin/register');
	}


	return controller;
}
