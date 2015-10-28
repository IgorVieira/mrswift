module.exports = function(app){
	var controller =  app.controllers.login;
	app.get('/login', controller.login);
}