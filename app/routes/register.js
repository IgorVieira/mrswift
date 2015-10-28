module.exports = function(app){
	var controller =  app.controllers.register;
	app.get('/register', controller.register);
}