module.exports = function(app){
	var controller = app.controllers.dashboard;

	app.route('/dashboard')
		.get(controller.dashboard)


}