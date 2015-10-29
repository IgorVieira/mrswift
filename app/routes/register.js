module.exports = function(app){
	var controller =  app.controllers.register;
	app.route('/register')
		.get(controller.register)
		.post(controller.registerUser);
}
