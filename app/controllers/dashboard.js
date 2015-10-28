module.exports = function(){
	var controller = {}

	controller.dashboard = function(req,res){
		res.render('admin/dashboard')
	}

	return controller;
}