module.exports = function(app){
	var controller =  app.controllers.login;
	app.route('/login')
		.get(controller.login)
		.post(controller.loginUser);


		app.get('/logout', function(req, res){
		req.session.destroy();
      	res.redirect('/login');
			})


}
