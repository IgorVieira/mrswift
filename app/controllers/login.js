module.exports =  function(){
	var controller = {}

	controller.login = function(req,res){
		res.render('admin/login')
	}

	return controller;

}